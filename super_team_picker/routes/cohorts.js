//requiring express and knex
const express = require('express');
const knex = require('../db/client');
const router = express.Router();

//displaying all the cohorts in the main page
router.get('/',(req,res) =>{
    knex('cohorts')
    .orderBy('created_at','desc')
    .then(cohorts =>{
        res.render('cohorts/index',{posts:posts});
    })
})

//create a new cohort template
router.get('/:id',(req,res)=>{
    knex('cohorts')
    .where('id',req.params.id)
    .first()
    .then(cohort =>{
        if(!cohort){
            res.send('No cohort found');
        }else{
            res.render('cohort/show', {cohort:cohort});
        }
        
    })
})

//creating a new cohort
router.get('/new',(req,res) =>{
    res.render('cohort/new',{cohort: false});
})

