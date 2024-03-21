const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    employee_id: {
        type: Number,
        required: true,
        unique: true 
    },
    first_name: {
        type: String,
        required: true
    },
    last_name : {
        type: String,
        required: true
    },
    department :{
        type: String,
        required: true
    },
    Address : {
        type: String,
        required: true
    },
    dob : {
        type: Date,
        required: true
    },
    salary: {
        type: Number,
        required: true
    }
}, {
    timestamps : true
});

const Employees = mongoose.model('Employees',employeeSchema);
module.exports = Employees;


