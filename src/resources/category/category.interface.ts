import { Document } from 'mongoose';

export default interface Post extends Document {
    type : string,
    categoryName : string
}
