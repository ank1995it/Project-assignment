import UserModel from '@/resources/user/user.model';
import token from '@/utils/token';
import { Encrypt } from '@/utils/services';

class UserService {
    private user = UserModel;

    /**
     * Register a new user
     */
    public async register(
        payload: any
    ): Promise<string | Error> {
        try {
            payload.password = await Encrypt.cryptPassword(payload.password)
            const user: any = await this.user.findOneAndUpdate({email : payload.email}, payload, { new: true, upsert: true });
            console.log("user", user)
            const accessToken = token.createToken(user);
            return accessToken;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    /**
     * Attempt to login a user
     */
    public async login(
        email: string,
        password: string
    ): Promise<string | Error> {
        try {
            const user = await this.user.findOne({ email });
            if (!user) {
                throw new Error('Unable to find user with that email address');
            }
                let bool = await Encrypt.comparePassword(password , user.password)
                console.log(bool)
                if(bool){
                console.log("user")
                return token.createToken(user);
            } else {
                throw new Error('Wrong credentials given');
            }
        } catch (error) {
            throw new Error('Unable to create user');
        }
    }
}

export default UserService;
