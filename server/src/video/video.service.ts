import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId, Types } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { Video, VideoDocument } from 'src/schemas/video.schema';

@Injectable()
export class VideoService {
    constructor(
        @InjectModel(Video.name) private videoModel: Model<VideoDocument>,
        @InjectModel(User.name) private userModel: Model<UserDocument>
    ) { }

    async createVideo(user_id: ObjectId, video: Express.Multer.File, description: string): Promise<Video> {



        const newVideo = new this.videoModel({
            video_url: `/uploads/videos/${video.filename}`,
            author: user_id,
            description: description || "",
        });

        const savedVIdeo = await newVideo.save();

        const user = await this.userModel.findByIdAndUpdate(
            user_id,
            { $push: { videos: savedVIdeo._id }, $inc: { video_count: 1 } },
            { new: true }
        ).exec();

        if (!user) {
            throw new Error('User dont exist');
        }

        return savedVIdeo;
    }

    async getAllVideos(): Promise<Video[]> {
        return this.videoModel.find().sort({ date: -1 }).populate("author").exec();
    }

    async getVideo(video_id: string): Promise<Video> {
        const video = await this.videoModel.findById(video_id).populate("author").exec();
        if (!video) {
            throw new NotFoundException("Video not found");
        }
        return video;
    }

    async updateVideo(video_id: string, user_id: Types.ObjectId, description: string, videoToUpdate: Express.Multer.File): Promise<Video> {
        const video = await this.videoModel.findById(video_id).exec();
        if (!video) {
            throw new NotFoundException('VIdeo not found');
        }
        if (!video.author.equals(user_id)) {
            throw new UnauthorizedException("THis isnt your video");
        }
        video.description = description;
        return video.save();
    }

    async deleteVideo(video_id: string, user_id: Types.ObjectId): Promise<Video> {
        const video = await this.videoModel.findById(video_id).exec();
        if (!video) {
            throw new NotFoundException("Video not found");
        }

        if (!video.author.equals(user_id)) {
            throw new UnauthorizedException("YOu can only delete your video");
        }

        await this.userModel.findByIdAndUpdate(
            user_id,
            { $pull: { videos: video_id }, $inc: { video_count: -1 } },
            { new: true }
        );

        await video.deleteOne();
        return video;
    }


}
