/*jshint esversion: 6 */

const express = require('express');
const app = express();


app.set('view engine', 'pug');

app.use('/static',express.static('public'));

const mainRoute = require('./routes');
const aboutRoute = require('./routes/about');
const projectRoute = require('./routes/project');
app.use(mainRoute,aboutRoute,projectRoute);






app.listen(3000, () =>{

    console.log('It works on localhost 3000');


});