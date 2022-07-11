const express = require('express');
const apiRouter = require('./routes/index')


const app = express();

const port = 3000;

apiRouter();

app.listen(3000)