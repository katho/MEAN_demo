'use strict'
var mongoose = require('mongoose');
var app =  require('./app');
var port = process.env.port || 3977;
mongoose.connect('mongodb://localhost:27017/mean_demo',(err, res) =>{
    if(err)
    {
        console.log("Connection is not working, project falling apart...");
        throw err;
    }else{
        console.log("Database is up and connection is ok");
        app.listen(port, function(){
            console.log("Server API listening on http://localhost:"+port);
        });
    }
});