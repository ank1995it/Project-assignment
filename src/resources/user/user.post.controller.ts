import { Router, Request, Response, NextFunction } from 'express';
import Controller from '@/utils/interfaces/controller.interface';
import HttpException from '@/utils/exceptions/http.exception';
import authenticated from '@/middleware/authenticated.middleware';
import PostService from '@/resources/post/post.service';
import CatergoryService from '@/resources/category/category.service';

class UserController implements Controller {
    public path = '/users/post';
    public router = Router();
    private PostService = new PostService();
    private CategoryService = new CatergoryService();

    constructor() {
        this.initialiseRoutes();
    }

    private initialiseRoutes(): void {
        this.router.get(`${this.path}`, authenticated, this.getPost);
        this.router.get(`${this.path}/getCategories`, authenticated, this.getCategories);
    }

    private getPost = async(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void>  => {
        if (!req.user) {
            return next(new HttpException(404, 'No logged in user'));
        }
        const post = await this.PostService.getPost(req.query)

        res.status(200).send({ data: post });
    };

    private getCategories = async(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void>  => {
        const categories = await this.CategoryService.getCategories()

        res.status(200).send({ data: categories });
    };
}

export default UserController;
