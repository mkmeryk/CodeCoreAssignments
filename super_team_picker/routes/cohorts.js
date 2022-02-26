//requiring express and knex
const express = require('express');
const knex = require('../db/client');
const router = express.Router();

//homePage
router.get('/home',(req,res) =>{
    res.render('cohorts/home')
})

//displaying all the cohorts in the main page
router.get('/',(req,res) =>{
    knex('cohorts')
    .orderBy('created_at','desc')
    .then(cohorts =>{
        console.log(cohorts)
        res.render('cohorts/index',{cohorts:cohorts});
    })
})

//creating a new cohort template
router.get('/new',(req,res) =>{
    res.render('cohorts/new',{cohort: false});
})

//creating a new cohort
router.post('/',(req,res) =>{
    knex('cohorts')
    .insert({
        name: req.body.name,
        logo_url: req.body.logo_url,
        members: req.body.members
    })
    .returning('*')
    .then(cohorts =>{
        const cohort = cohorts[0];
        res.redirect(`/cohorts/${cohort.id}`)
    })
})


//show a specific cohort
router.get('/:id',(req,res)=>{
    knex('cohorts')
    .where('id',req.params.id)
    .first()
    .then(cohort =>{
        if(!cohort){
            res.send('No cohort found');
        }else{
            res.render('cohorts/show', {cohort:cohort});
        }
        
    })
})




module.exports = router;