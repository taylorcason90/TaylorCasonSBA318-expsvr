import { Router } from 'express';
import User from '../../db/schemas/join-us/users';

export default function(app: Router) {
    const route = Router();
    app.use('/', route);

    route.get('/users', async (req, res, next) => {
        try {
            const users = await User.find();
            console.log('Retrieved users:', users); // Log the retrieved users
            res.json(users);
        } catch (error) {
            next(error);
        }
    });
}
