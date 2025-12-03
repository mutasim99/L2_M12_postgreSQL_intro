import express, { Request, Response } from 'express';
const app = express();
const port = 5000;

app.use(express.json());

app.get('/', (req:Request, res:Response)=>{
    res.send('data not found')
});


app.listen(port, ()=>{
    console.log(`My app is running on port:${port}`);
    
})