const express = require('express')();   //  Framework that provides a robust set of features for web and mobile applications. Creating a robust API is quick and easy
const app = express();
const cheerio = require('cheerio');     //  Cheerio parses markup and provides an API for traversing/manipulating the resulting data structure.
const axios = require('axios');         //  Promise based HTTP client for the browser and node.js
const PORT = 2123;

app.use(express.json())    //  express.json acts as middleware to parse json content

app.listen(
    PORT,
    () => console.log(`This is available on http://localhost:${PORT}`)
);

app.get('/endpoint1', (req,res) => {
    res.status(200).send({
        text:'Hi',
        text2:'You have reached endpoint 1'
    })
});

app.post('endpoint1/:id', (req,res) => {    //  ID is a dynamic variable
    
    const {id} = req.params;
    const {logo} = req.body;

    if(!logo){
        res.status(418).send({Message:'Missing a logo'})
    }
    
    res.send({
        Message:`Hi, we have received your ID:${id} and logo:${logo}`
    })
    
});