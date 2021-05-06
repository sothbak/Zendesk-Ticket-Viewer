const express = require('express');
const cors = require('cors');
const base64 = require('base-64');

const app = express();
const axios = require('axios');
require('dotenv').config();

app.use(cors());
app.use(express.json());

const url = "https://sothearoth.zendesk.com";
const username = process.env.USER;
const password = process.env.PASSWORD;
const authentication = "Basic " + base64.encode(username + ":" + password);

app.get('/', (req, res) => {
    res.send('This is a Zendesk ticket app')
});

let port = process.env.PORT || 4001;

app.listen(port, () => {
    console.log(`App running on port ${port} `);
});

app.get('/tickets', (req, res) => {
    const api_url = url + '/api/v2/tickets'
    axios.get(api_url, {
        headers: {
            Authorization: authentication
        }
    }).then(response => {
        res.json(response.data);
        // console.log(response.data);
        console.log("Found the tickets!");
    }).catch(error => {
        console.log(error);
        console.log("Couldn't find the tickets, sorry!");
    });
});