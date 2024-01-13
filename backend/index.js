const connectToMongo = require('./db')
const express = require('express')
connectToMongo();
const app = express()
const port = 5000
var cors = require('cors')
app.use(cors())
app.use(express.json()); //middleware to fetch the data from req. body and also to deal with json data

//Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`SkyVault backend listening on http://localhost:${port}`)
})