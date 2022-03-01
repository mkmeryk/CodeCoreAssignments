//requiring express and knex
const { render } = require('ejs');
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

//editing a cohort template
router.get('/:id/edit',(req,res) =>{

    knex('cohorts')
    .where('id', req.params.id)
    .first()
    .then(cohort =>{
        res.render('cohorts/edit',{cohort:cohort})
    })

})

//editing a cohort
router.patch('/:id',(req,res) =>{

    knex('cohorts')
    .where('id',req.params.id)
    .update({
        name: req.body.name,
        logo_url: req.body.logo_url,
        members: req.body.members
    })
    .then(() =>{
        res.redirect(`/cohorts/${req.params.id}`)
    })

})

router.post('/:id',(req,res) =>{

    console.log('this is req id',req.body)
    knex('cohorts')
    .first()
    .where('id',req.params.id)
    .then(cohort=>{
       
        //splitting the given data from each cohort
        const team = cohort.members.split(',');
        
        //shuffling the array for receiving different results each time
        function shuffle(array){
            randomArray = array.sort(()=> Math.random() -0.5);
            return randomArray;
        }

        //organizing by the number of groups given
        function teamCount(x){

            shuffle(team);
            let memberCount = Math.ceil(team.length/x);
            let alteredTeams=[];

            for(let groupAmount = memberCount ; groupAmount>0 ; groupAmount--){

                if(team.length>memberCount){

                    tempTeam = [];
                    for(let i = memberCount; i > 0; i--){
                        tempTeam.push(team.pop());
                    }
                    alteredTeams.push(tempTeam);
                }
            }

            alteredTeams.push(team);
            return alteredTeams;

        }

        //organizing by the number of members in a team given
        function numberTeamPicker(x){

            shuffle(team);
            let teamCount = Math.ceil(team.length/x);
            let alteredTeams=[];

            for(let gr = teamCount; gr > 0; gr--){

                if(team.length>x){
                    tempTeam = []
                    for(let i = x; i > 0; i--){
                        tempTeam.push(team.pop());
                    }
                    alteredTeams.push(tempTeam);
                }
                
            }

            alteredTeams.push(team);
            return alteredTeams;
        }

        if(req.body.method == 'team_count'){

            res.render('cohorts/show',{cohort:cohort,renderedCohort:teamCount(Number(req.body.quantity))})
            console.log(teamCount(Number(req.body.quantity)))

        }else{

            res.render('cohorts/show',{cohort:cohort,renderedCohort:numberTeamPicker(Number(req.body.quantity))})
            console.log(numberTeamPicker(Number(req.body.quantity)))

        }
                
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

            res.render('cohorts/show', {cohort:cohort,renderedCohort:[]});
            
        }
        
    })
})

//delete cohort template
router.delete('/:id' ,(req,res) =>{

    knex('cohorts')
    .where('id',req.params.id)
    .del()
    .then(() =>{
        res.redirect('/cohorts')
    })

})

module.exports = router;

