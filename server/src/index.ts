import * as express from 'express';
import { createConnection } from 'typeorm';
import root from './routes/root';
import monument from './routes/monument';
import region from './routes/region';
import publicFigure from './routes/publicFigure';
import "reflect-metadata";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/', root);
app.use('/monuments', monument);
app.use('/regions', region);
app.use('/publicFigures', publicFigure);

createConnection().then(() => {
  console.log('database connection successful');
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});