import express, { Request, Response } from 'express';
import { Pool } from 'pg'
const app = express();
const port = 5000;

app.use(express.json());

const pool = new Pool({
    connectionString: `postgresql://neondb_owner:npg_2A4GKVrIkheU@ep-ancient-voice-adwqx4bg-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require`
});

const initDb = async () => {
    await pool.query(
        `
            CREATE TABLE If NOT EXISTS users(
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(150) NOT NULL,
                age INT,
                phone VARCHAR(15),
                address TEXT,
                created_at TIMESTAMP DEFAULT NOW(),
                updated_at TIMESTAMP DEFAULT NOW()
            )
        `
    )
}

initDb();

app.get('/', (req: Request, res: Response) => {
    res.send('data not found')
});

app.post('/', (req: Request, res: Response) => {
    console.log(req.body);
    res.status(201).json({
        message: 'data is not posted'
    })

})


app.listen(port, () => {
    console.log(`My app is running on port:${port}`);

})