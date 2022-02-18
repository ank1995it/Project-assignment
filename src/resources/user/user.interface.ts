import { Document } from 'mongoose';

export default interface User extends Document {
    email: string;
    name: string;
    password: string;
    phoneNo: string;
    dob: string;
    tob: string;
    gender: string;
    maritalStatus: string;
    language: string;
    profilePicutre: string;

    isValidPassword(password: string): Promise<Error | boolean>;
}
