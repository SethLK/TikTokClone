import { Prop, Schema } from "@nestjs/mongoose";
import { Types } from "mongoose";

@Schema()
export class Comment {
    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    author: Types.ObjectId;

    @Prop({ type: String, default: "" })
    comment: string;

    @Prop({ type: Date, default: Date.now })
    date: Date;
}

export type CommentType = {
    _id: string,
    comment: string,
    author: Types.ObjectId;
};