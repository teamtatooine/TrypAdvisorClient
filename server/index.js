const express = require('express');
const path = require('path');

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '/../dist')));

const port = 3000
app.listen(port, () => console.log('TrypAdvisor listening on port', port));