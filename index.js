// const cors = require('cors');
import cors from 'cors';
import express from 'express';
import initRoutes from './src/routes';

require('dotenv').config();
require('./connection_database');

const app = express();
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

initRoutes(app)

const PORT = process.env.PORT || 5000;

const listener = app.listen(PORT, () => {
    console.log('Your app is listening on port ' + listener.address().port)
}
)
  