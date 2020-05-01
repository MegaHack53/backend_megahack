const app = require('express')();

const PORT = process.env.PORT || 3333;

app.listen(3333,() => console.log(`listen on port ${PORT}`))

app.get('/', (req,res) => res.json({message: 'hello megahack !'}))