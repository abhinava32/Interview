const express  = require('express');
const port = 8001;

const app = express();
const db = require('./Config/mongoose');
const cors = require('cors');
app.use(cors());
app.use(express.urlencoded({extended: false}));

app.use('/', require('./Routes/index'));


app.listen(port, function(err){
    if(err){
        console.log("problem in connecting to server");
        return;
    }
    console.log("connected!!");

})