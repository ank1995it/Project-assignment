import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import User from '@/resources/user/user.interface';

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        phoneNo: {
            type: String,
            required: true,
        },
        dob : {
            type: String,
            required: true
        },
        tob : {
            type: String,
            required: true
        },
        gender : {
            type: String,
            required: true
        },
        maritalStatus : {
            type: String,
            required: true
        },
        language : {
            type: String,
            required: true
        },
        profilePicture: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

UserSchema.pre<User>('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }

    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;

    next();
});

UserSchema.methods.isValidPassword = async function (
    password: string
): Promise<Error | boolean> {
    return await bcrypt.compare(password, this.password);
};

export default model<User>('User1', UserSchema);
