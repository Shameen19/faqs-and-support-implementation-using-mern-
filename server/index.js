import express from 'express';

import Connection from './database/database.js';

import Routes from './routes/route.js';

import cors from 'cors';

import bodyParser from 'body-parser';



const app=express();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.post('/register',Routes);
app.get('/view',Routes);
app.get('/:id',Routes);
const PORT=7000;


Connection();


app.listen(PORT,()=>console.log('Server is running at port 9010'));