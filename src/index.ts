import 'dotenv/config';
import 'module-alias/register';
import validateEnv from '@/utils/validateEnv';
import App from './app';
import PostController from '@/resources/post/post.controller';
import UserController from '@/resources/user/user.controller';
import UserPostController from '@/resources/user/user.post.controller';
import AuthorController from '@/resources/category/category.controller';

validateEnv();

const app = new App(
    [new PostController(), new UserController(), new UserPostController(), new AuthorController()],
    Number(4100)
);

app.listen();
