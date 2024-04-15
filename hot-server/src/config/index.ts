import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();

if (envFound.error) {
    throw new Error('no .env file found');
}

export default {
    app: {
        port: parseInt(process.env.PORT, 10),
        apiPrefix: process.env.API_PREFIX,
    },
    logs: {
        morgan: process.env.MORGAN,
    },
    mongoose: {
        uri: process.env.MONGODB_URI,
    },
};
