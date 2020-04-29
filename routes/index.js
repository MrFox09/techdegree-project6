/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const {projects} = require('../data/data.json');

// route to index page

router.get('/', (req,res) => {

    res.render('index',{projects});
   
    

});


module.exports = router;