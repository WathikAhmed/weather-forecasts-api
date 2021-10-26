const PORT = 4321;
const express = require('express');     //  Framework that provides a robust set of features for web and mobile applications. Creating a robust API is quick and easy
const cheerio = require('cheerio');     //  Cheerio parses markup and provides an API for traversing/manipulating the resulting data structure.
const axios = require('axios');         //  Promise based HTTP client for the browser and node.js


const app = express();



const sources = [
    {
        name: 'Australian Government Bureau of Meteorology',
        address: 'http://www.bom.gov.au/',
        base: ''
    }
]

const forecastArray=[];

sources.forEach(sources => {
    axios.get(sources.address)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)

            $('a:contains("Forecast")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')
                
                forecastArray.push({
                    title,
                    url: sources.base + url,
                    source: sources.name
                })
            })

        })
})

app.listen(
    PORT,
    () => console.log(`Server running on PORT ${PORT}`)
);

app.get('/', (req,res) => {
    res.json('Welcome to the Weather API')
});

app.get('/weather', (req,res) => {
    res.json(forecastArray)
});



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