//requiring express
const express = require('express');
const app = express();

//method override
const methodOverride = require('method-override');

//urlencoded
app.use(express.urlencoded({extended: true}))

//method over ride middle ware
app.use(methodOverride((req,res) =>{
    const method = req.body._method;
    return method
}))

//cookie parser
const cookieParser = require('cookie-parser');
app.use(cookieParser());


//logger middleware using morgan
const logger = require('morgan');
app.use(logger('dev'));

//path
const path = require('path');

//setting the view engine
app.set('view engine','ejs');
app.set('views','views');

//using bootstrap
app.use(express.static(path.join(__dirname,'publics')));

//cohort router
const cohortRouter = require('./routes/cohorts');
app.use('/cohorts',cohortRouter);

//server
const PORT = 3000;
const DOMAIN = 'localhost'

app.listen(PORT,DOMAIN,() =>{
    console.log(`server is listening on http://${DOMAIN}:${PORT}`)
})