const express = require('express');
const path = require('path');
const Joi = require('joi');
const bodyParser = require('body-parser');
const app = express();
let ejs = require('ejs');


app.use('/public',express.static(path.join(__dirname, 'static')));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// middleware for requests
app.use((req,res,next) =>{
    next();
});

const people = require('./routes/people');

app.use('/people',people);

// middleware for specific routes
app.use('/example',(req,res,next) =>{
 res.send('hy');
    next();
});

app.set('view engine','ejs');

app.get('/',(req,res) => {
//    res.sendFile(path.join(__dirname,'static','index.html'));
     res.render('index');
});

app.post('/',(req,res) => {

    const schema = Joi.object().keys({
         email: Joi.string().trim().email().required(),
         pass: Joi.string().min(5)
    });

    Joi.validate(req.body,schema,(err,results) => {
   if(err){
       res.send('An Error has occured');
       console.log(err);
   }else{
   res.send('Success');
   console.log(req.body);
   }

    });

});

app.get('/example',(req,res) => {
    res.send('Example path');
});

app.get('/example/:name/:age',(req,res) => {
      console.log(req.params);
      console.log(req.query);
      res.send(req.params.name + " : " + req.params.age);

});
app.listen('3000');