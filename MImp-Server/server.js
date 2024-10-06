require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const dbConn = require('./controller/databse');

const port = process.env.PORT || 1111;

app.get('/', (req, res) => {
    res.send('Hello vinoth server is running');
})
app.listen(port, () => {
    console.log('Server is running on port http://localhost:' + port);   
})