import mongoose, { Document, Schema } from "mongoose";

export interface IMessage extends Document {
	chat: mongoose.Types.ObjectId;
	sender: mongoose.Types.ObjectId;
	text: string;
	createdAt: Date;
	updated: Date
}

const MessageSchema = new Schema<IMessage>({
	chat: {
		type: mongoose.Types.ObjectId,
		ref: "Chat",
		required: true
	}, sender: {
		type: mongoose.Types.ObjectId,
		ref: "User",
		required: true
	}, text: {
		type: String,
		required: true,
		trim: true
	}
}, { timestamps: true })

MessageSchema.index({ chat: 1, createdAt: 1 })

const Message = mongoose.model("Message", MessageSchema)
export default Message