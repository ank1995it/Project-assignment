import PostModel from '@/resources/post/post.model';
import Post from '@/resources/post/post.interface';
import { Types } from 'mongoose';


class PostService {
    
    private post = PostModel;
    public async create(body: string): Promise<Post> {
        try {
            console.log("body", body)
            const post = await this.post.create(body);
            return post;
        } catch (error) {
            throw new Error('Unable to create post');
        }
    }

    public async getPost(payload: any): Promise<Post> {
        try {
            let pipeline: any = []
            console.log("payload", payload)
            let searchConditions: any = []
            if (payload.search) {
                searchConditions.push({ headline: { $regex: `.*${payload.search}.*`, $options: "si" } });
                searchConditions.push({ description: { $regex: `.*${payload.search}.*`, $options: "si" } });
            }

            if (payload.categoryIds) {
                searchConditions.push({ "category._id": { $in: payload.categoryIds.split(",").map((i: any) => new Types.ObjectId(i)) } });
            }
            if (searchConditions.length) pipeline.push({ $match: { $or: searchConditions } })
            if(payload.sort) pipeline.push({ $sort: { createdAt: 1 } })
            
            const post: any = await this.post.aggregate(pipeline).skip((parseInt(payload.page)-1) *parseInt(payload.limit) ).limit(parseInt(payload.limit))
            return post;
        } catch (error) {
            throw new Error('Unable to get post');
        }
    }

}

export default PostService;
