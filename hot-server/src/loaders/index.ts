import expressLoader from './express';
import mongooseLoader from './mongoose';
import type { Express} from 'express';

export default async function name({app}:{app: Express}) {
    await mongooseLoader();
    console.log('mongoose loaded');

    await expressLoader({app});
    console.log('express loaded');
}

