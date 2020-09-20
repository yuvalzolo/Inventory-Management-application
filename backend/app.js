const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const itemRoutes = require('./api/routes/items');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(express.static('public'));
//Handle cors
app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers','*');
    if(req.method==='OPTIONS'){
        req.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});
//Routes which should handle requests
app.use('/items', itemRoutes);
//Handle errors
app.use((req, res, next)=>{
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
        error : {
            message : error.message
        }
    });
});
module.exports = app;
