const express = require('express');

const app = new express();

app.use(express.static('html')).listen(1464)