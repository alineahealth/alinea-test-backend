import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = parseInt(`${process.env.PORT || 3000}`);
app.use(express.json());

app.get('/', (request, response) => {
  return response.send({
    message: `Hello`,
  });
});

app.listen(PORT, () => console.log(`Listening ${PORT}`));

