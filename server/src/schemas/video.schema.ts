import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document, Types } from "mongoose";

export type VideoDocument = mongoose.HydratedDocument<Video>;

@Schema()
export class Video {
    @Prop({ type: String, required: true })
    video_url: string;

    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    author: Types.ObjectId;

    @Prop({ type: Number, default: 0 })
    likes_count: number;

    @Prop({ type: [{ type: Types.ObjectId, ref: 'User' }] })
    likeByUsers: Types.ObjectId[];

    @Prop({ type: Date, default: Date.now })
    date: Date;

    @Prop({ type: String, default: "" })
    description: string;

    @Prop({ type: Number, default: 0 })
    comments_count: number;

    @Prop({ type: [{ type: Types.ObjectId, ref: "Comment" }] })
    comments: Types.ObjectId[];

}

export const VideoSchema = SchemaFactory.createForClass(Video);

export type VideoType = {
    _id: string;
    video_url: string;
    description: string;
    likes_count: number;
    likeByUsers: Types.ObjectId[];
    author: Types.ObjectId;
    comments_count: number;
    comments: Types.ObjectId[];
};