import { Schema, model } from 'mongoose';
import Post from '@/resources/post/post.interface';
import { ObjectID } from 'bson';

const PostSchema = new Schema(
    {
        thumbnailImage: {
            type: String,
            required: true,
        },
        headline: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        category: {
            _id : { type: ObjectID, required: true },
            categoryName : {type : String, required: true }
        },
        authorName: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

export default model<Post>('Post', PostSchema);
