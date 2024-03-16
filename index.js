const express = require('express');
const app = express();
require("dotenv").config();

app.get('/', async (req, res)=>{
    res.json('hello');
})
app.listen(3000, ()=>{
    console.log('server running')
});