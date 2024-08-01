import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose"

export type UserDocument = mongoose.HydratedDocument<User>

@Schema()
export class User {
    @Prop({ required: true })
    username: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    password: string

    @Prop({ default: "" })
    profileUrl?: string;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Video'}] })
    videos: mongoose.Types.ObjectId[]

    @Prop({ default: 0 })
    video_count: number;
}

export const UserSchema = SchemaFactory.createForClass(User)