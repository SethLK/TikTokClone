import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document, Types } from "mongoose";

export type UserDocument = mongoose.HydratedDocument<User>

@Schema()
export class User {
    @Prop({ type: String, required: true })
    username: string;

    @Prop({ type: String, required: true })
    email: string;

    @Prop({ type: String, required: true })
    password: string;

    @Prop({ type: String, default: "" })
    profileUrl?: string;

    @Prop({ type: [{ type: mongoose.Types.ObjectId, ref: 'Video' }] })
    videos: mongoose.Types.ObjectId[];

    @Prop({ type: Number, default: 0 })
    video_count: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
