/*jshint esversion: 6 */

const express = require('express');
const app = express();


app.set('view engine', 'pug');

app.use('/static',express.static('public'));

const mainRoute = require('./routes');
const aboutRoute = require('./routes/about');
const projectRoute = require('./routes/project');
app.use(mainRoute,aboutRoute,projectRoute);

/* Error Handling

    When a non existent route is requested, creates a new Error object with a user friendly message.
    Set the status to 404 (page not found)


*/

app.use((req, res, next) =>{
    const err = new Error('We are sorry, page not found!');
    err.status =404;
    next(err); 
  
  
  });

  /* Takes the message and status which was set above and render a error template page, which contains a user friendly message.  */

  app.use((err, req, res, next) =>{
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
   
  
  });





app.listen(3000, () =>{

    console.log('It works on localhost 3000');


});