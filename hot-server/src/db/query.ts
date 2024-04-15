import mongoose from 'mongoose';

export default async function queryMongoDB<T = any>(collectionName: string, query: any) {
    try {
        const Model = mongoose.model(collectionName);
        const results = await Model.find(query);
        return results;
    } catch (error) {
        console.error('Error executing MongoDB query:', error);
        throw error;
    }
}
