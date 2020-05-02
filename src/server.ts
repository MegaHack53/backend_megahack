import express from 'express';
import './database/mongo';
import routes from './routes';

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());
app.use(routes);

app.listen(3333,() => console.log(`listen on port ${PORT}`))
