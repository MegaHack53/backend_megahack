import express from 'express';
import './database/mongo';
import routes from './routes';

const app = express();
const PORT = process.env.PORT || 3333;

app.use(routes);
app.use(express.json());

app.get('/', (req,res) => res.json({message: 'hello megahack !'}))

app.listen(3333,() => console.log(`listen on port ${PORT}`))
