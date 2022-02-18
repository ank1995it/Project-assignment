import { Router, Request, Response, NextFunction } from 'express';
import Controller from '@/utils/interfaces/controller.interface';
import CategoryService from '@/resources/category/category.service';

class AuthorController implements Controller {
    public path = '/catgoery';
    public router = Router();
    private CategoryService = new CategoryService();

    constructor() {
        this.initialiseRoutes();
    }

    private initialiseRoutes(): void {
        this.router.get(`${this.path}`, this.getCategories);
        this.router.post(`${this.path}`, this.postCategories);
    }

    private getCategories = async(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void>  => {
        const post = await this.CategoryService.getCategories()

        res.status(200).send({ data: post });
    };

    private postCategories = async(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void>  => {
        const post = await this.CategoryService.create(req.body)
        res.status(200).send({ data: post });
    };
}

export default AuthorController;
