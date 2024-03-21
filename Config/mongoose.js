const mongoose = require('mongoose');
const dbPath = 'mongodb://localhost/interview';
let db;
try{
   db = mongoose.connect(dbPath);
    // 'mongodb://localhost/majorProject',
}
catch(err){
    console.log(err);
}
finally{
    console.log("connected to db!!");
    module.exports = db.Connection;
}

