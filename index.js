const express = require('express');
const port = 8000;
const app = express();




app.listen(port,function(err){
    if(err){
        console.log('Error occures to run the server:',err);
        return;
    }
    console.log('server is run and up on port:',port);
});