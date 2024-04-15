import mongoose, { Schema, Document } from 'mongoose';

export interface UserDocument extends Document {
    name: string;
    email: string;
    mobile: string;
}
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true }
}, { timestamps: true });

const User = mongoose.model<UserDocument>('User', userSchema);

export default User;
