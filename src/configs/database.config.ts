import mongoose from 'mongoose';
import log from './logger.config';
import dotenv from 'dotenv';

// Initailizing env variables
dotenv.config();

// Setting parameters
mongoose.set('strictQuery', true);

const database = () => {
    mongoose
        .connect(process.env.MONGODB_URI as string)
        .then(() => {
            log.info('Database connected');
        })
        .catch((error) => {
            log.error('Database Error');
            process.exit(1);
        });
};

export default database;
