import { Schema, model } from 'mongoose';
import Category from '@/resources/category/category.interface';

const CategorySchema = new Schema(
    {
        categoryName: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

export default model<Category>('Categories', CategorySchema);
