/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();

// route to the about page

router.get('/about', (req,res) => {

    res.render('about');
   
    

});


module.exports = router;