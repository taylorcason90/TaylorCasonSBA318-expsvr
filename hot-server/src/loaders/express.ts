
import express from 'express'
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import config from '../config'
import indexRouter from '../routes'
import { notFoundHandler, globalErrorHandler } from '../routes/middlewares/errors';
import type {Express} from 'express' 


export default async function ({app}: {app: Express}) {
    //status checking points

    app.get('status', (req,res) => res.sendStatus(200).end());
    app.head('status', (req,res) => res.sendStatus(400).end());

    app.enable('trust proxy'); 

app.use(
    helmet({
        contentSecurityPolicy: false
})
);
// middlewares)
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(morgan(config.logs.morgan));


//routes
app.use(config.app.apiPrefix, indexRouter());

//error handlers
app.use(notFoundHandler); 
app.use(globalErrorHandler); 



}

