/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();
const {projects} = require('../data/data.json');

router.get('/project/:id', (req,res) => {
    const {id} = req.params;
    const data = projects[id];   

    
    res.render('project',{data});     
    

});


module.exports = router;