import express from 'express';  
import { pool } from './db.js';
import { PORT } from './config.js';

const app = express();

app.get('/', async (req, res) => {
    const [row] = await pool.query("SELECT * FROM users");
    //res.send('Hello World!');
    res.json(row);
});

app.get('/ping', async (req, res) => {
    const [result] = await pool.query(`SELECT "hello world" AS RESULT`);
    console.log(result);    
    //res.send('Welcome to the ping page!');
    res.json(result[0]);    
});

app.get("/create",async (req,res)=>{
    const result = await pool.query("INSERT INTO users(name) values('John')");
    res.json(result);
})

app.listen(PORT);
console.log(`Server running at http://localhost:${PORT}/`);