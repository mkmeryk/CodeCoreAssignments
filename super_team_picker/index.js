//requiring express
const express = require('express');
const app = express();

//urlencoded
app.use(express.urlencoded({extended: true}))

//cookie parser
const cookieParser = require('cookie-parser');
app.use(cookieParser());

//custom middle ware
//something along there is not working

//logger middleware using morgan
const logger = require('morgan');
app.use(logger('dev'));

//setiing the view engine
app.set('view engine','ejs');
app.set('views','views');

//cohort router
const cohortRouter = require('./routes/cohorts');
app.use('/cohorts',cohortRouter);

//server
const PORT = 3000;
const DOMAIN = 'localhost'

app.listen(PORT,DOMAIN,() =>{
    console.log(`server is listening on http://${DOMAIN}:${PORT}`)
})