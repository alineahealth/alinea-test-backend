import express from 'express';
const app = express();

import dotenv from 'dotenv';
import about from './routes/about';
import users from './routes/users';

dotenv.config();

app.use('/about', about);
app.use('/users', users);


const PORT = parseInt(`${process.env.PORT || 3000}`);
app.listen(PORT, () => console.log(`Listening ${PORT}`));

