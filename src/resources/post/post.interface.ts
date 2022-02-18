import { Document } from 'mongoose';

export default interface Post extends Document {
    thumbnailImage : string,
    headline : string,
    category  : object,
    authorName : string,
    description : string
}
