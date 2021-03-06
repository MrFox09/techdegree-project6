/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();
const {projects} = require('../data/data.json');

// route to project page with dynamicly genarated data for each project depending on the id in the link

router.get('/project/:id', (req,res) => {
    const {id} = req.params;
    const data = projects[id];   

    if (id <= projects.length) {

        res.render('project',{data});    
        
    }else{

        res.redirect('/');       

    }
      
    

});


module.exports = router;