import { NextFunction, Request, Response } from 'express';
import UserService from '../services/user.service';
import { UserDocument, IUserRequest } from '../models/user.model';
import { IResponseData } from '../models/response.model';
import log from '../configs/logger.config';

class UserController extends UserService {
    constructor() {
        super();
    }

    async createUserHandler(
        req: Request<{}, {}, IUserRequest>,
        res: Response<IResponseData<UserDocument>>,
        next: NextFunction
    ) {
        try {
            const user: IResponseData<UserDocument> = await super.createUser(
                req.body
            );

            throw new Error('user not found');

            res.status(201).json(user);
        } catch (error: any) {
            log.error(error.message);
            return next(error);
        }
    }
}

export default UserController;
