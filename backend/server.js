import express from 'express';
import mongoose from 'mongoose';
import data from './data.js';
import dotenv from 'dotenv'
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected successfully');
  })
  .catch((err) => {
    console.log(err.message);
  });
const app = express();

app.use('/api/seed', seedRouter)
// test
app.use('/api/products', productRouter)

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});