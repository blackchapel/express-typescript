import mongoose from 'mongoose';

export interface IUserRequest {
    name: string;
    email: string;
    password: string;
}

export interface UserDocument extends IUserRequest, mongoose.Document {
    isActive: boolean;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}
