import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import soldierRoute from './routes/soldier.route';

dotenv.config();
const port = process.env.PORT || 5000;
const app: Express = express();
app.use(cors({ origin: '*' }));

app.use('/soldier', soldierRoute);

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});