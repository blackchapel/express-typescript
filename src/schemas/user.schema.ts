import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { UserDocument } from '../models/user.model';
import dotenv from 'dotenv';

dotenv.config();

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        email: {
            type: String
        },
        password: {
            type: String
        },
        isActive: {
            type: Boolean,
            default: false
        },
        isDeleted: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);

userSchema.pre('save', async function (next) {
    const user = this as UserDocument;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // Salting & hashing
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hashSync(user.password, salt);

    // Replace the password with the hash
    user.password = hash;

    return next();
});

const User = mongoose.model<UserDocument>('user', userSchema);

export default User;
