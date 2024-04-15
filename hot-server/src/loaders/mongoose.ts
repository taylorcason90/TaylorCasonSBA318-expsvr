import mongoose from 'mongoose';
import config from '../config';

export default async function connectToMongoDB() {
    try {
        await mongoose.connect(config.mongoose.uri);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}
