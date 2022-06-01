const app = require("./app");
const path = require('path');
const dotenv = require("dotenv").config();
const port = process.env.PORT || 4000;
const database = require('./config/mongoose')

database();
app.get('/', (req, res) => {
    res.send('Hi i am from crypto')
})


app.listen(port, () => {
    console.log(`Server is working on ${port}`);
});