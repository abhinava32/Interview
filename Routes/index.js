const express = require('express');
const router = express.Router();
const addEmployee = require('../Controller/AddEmployee');

router.post('/add', addEmployee.addEmployee);

module.exports = router;