import CategoryModel from '@/resources/category/category.model';
import Category from '@/resources/category/category.interface';

class CategoryService {
    private category = CategoryModel;

    /**
     * Create a new post
     */
    public async create(body: string): Promise<Category> {
        try {
            console.log("body", body)
            const post = await this.category.create(body);
            return post;
        } catch (error) {
            throw new Error('Unable to create category');
        }
    }

    public async getCategories(): Promise<Category> {
        try {
            const categoryList: any = await this.category.find({}, {_id : 1, categoryName :1});

            return categoryList;
        } catch (error) {
            throw new Error('Unable to get post');
        }
    }
}

export default CategoryService;
