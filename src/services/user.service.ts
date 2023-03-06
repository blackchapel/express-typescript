import User from '../schemas/user.schema';
import { IUserRequest, UserDocument } from '../models/user.model';
import { IResponseData } from '../models/response.model';

class UserService {
    async createUser(input: IUserRequest) {
        // Creating user object
        const user: UserDocument = new User({
            name: input.name,
            email: input.email,
            password: input.password,
            isActived: true,
            isDeleted: false
        });

        // Saving user object to db
        await user.save();

        // Creating result object
        const result: IResponseData<UserDocument> = {
            message: 'user created successfully',
            data: user
        };

        // Returning result object
        return result;
    }
}

export default UserService;
