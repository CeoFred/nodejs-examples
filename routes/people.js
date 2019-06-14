const express = require('express');
const route = express.Router();

route.use((req,res,next) => {
    
    console.log('people route used');
     next();
});

route.get('/', (req,res)=>{
        res.send('/ beign hit');
 });
 route.get('/people/', (req,res)=>{
    res.send('/ people beign hit');
});


module.exports = route;