import express from 'express';
import cors from 'cors';
import { logger } from './config/logger';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());

// Set up environment variables
// Load from .env file or use defaults
const port = process.env.PORT;
const api_url = process.env.API_URL;
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/hitcounter';

app.get('/ping', (_req , res) => {
    logger.info(`Ping request received`);
    res.send('pong')
})

app.get("/random", (_req, res) => {
    logger.info(`Random request received`);
    res.json({ number: Math.floor(Math.random() * 1000) });
})

app.listen(port, () => {
    logger.info(`Server running at http://${api_url}:${port}`);
});
