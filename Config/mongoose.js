const mongoose = require('mongoose');
const dbPath = process.env.DB_PATH;
let db;
try{
   db = mongoose.connect(dbPath);
   module.exports = db.Connection;
   
}
catch(err){
    console.log(err);
    return;
}
return;

