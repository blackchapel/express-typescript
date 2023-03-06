import express, { Application, NextFunction, Request, Response } from 'express';
import database from './configs/database.config';
import log from './configs/logger.config';
import fs from 'fs';
import dotenv from 'dotenv';

// Importing routes
import router from './routes/user.route';

// Initailizing env variables
dotenv.config();

// Initializing an express app
const app: Application = express();

// Server Port
const PORT: string | undefined = process.env.PORT;

// Formatting incoming data and allowing cross origin requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// APIs
app.use('/api/user', router);

// Error handeling
app.use((error: any, req: Request, res: Response) => {
    console.log('hello');
    return res.status(400).json({
        message: error.message
    });
});

// Test API
app.get('/api', (req: Request, res: Response) => {
    res.status(200).json({
        name: `${process.env.APP_NAME}`,
        apiVersion: JSON.parse(fs.readFileSync('./package.json').toString())
            .version
    });
});

// Listening on the port
app.listen(PORT, () => {
    log.info(`Server running on http://localhost:${PORT}`);
    database();
});
