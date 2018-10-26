'use strict'
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//Cargar rutas

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Cabeceras HTPP

//Rutas base

//example
app.get('/test', function(req, res){
    res.status(200).send({message:'seems working, way to go!!'});
});

module.exports = app;