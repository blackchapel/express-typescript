import express from 'express'
import fs from 'fs'; 
import dotenv from 'dotenv'

// Initailizing env variables
dotenv.config();

// Initializing an express app
const app: express.Application = express();

// Server Port
const PORT: string | undefined = process.env.PORT;

// Formatting incoming data and allowing cross origin requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test API
app.get('/api', (req: express.Request, res: express.Response) => {
    res.status(200).json({
        name: `${process.env.APP_NAME}`,
        apiVersion: JSON.parse(fs.readFileSync('./package.json').toString())
            .version
    });
})

// Listening on the port
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});