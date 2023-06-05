const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const bodyParser = require("body-parser")
const cors = require("cors");

const userroute = require('./routers/userroute');


app.use(cookieParser())
app.use(bodyParser.json());

const corsOption = {
    credentials: true,
    origin: [
        'http://localhost:3000',
        "https://coincap123.herokuapp.com",
        "http://coincap123.herokuapp.com",
        "https://cryptotrackfront-paj5i6pgc-mokshsethi.vercel.app"
    ]
}

app.use(cors(corsOption))
app.use('/api/user', userroute);

app.get('/', (req, res) => {
    res.send('Hi i am from coincap')
})

module.exports = app
