const express = require('express');
const app = new express;
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',function(req,res){
    res.send('BackEnd is working');
})

app.listen(PORT,()=>{console.log('Server at 5000')});
