const express = require('express');
const router = express.Router();
const addEmployee = require('../Controller/AddEmployee');
const FilterByDept = require('../Controller/FilterByDept');
const Search = require('../Controller/Search');


router.post('/add', addEmployee.addEmployee);
router.get('/dept/:department', FilterByDept.FilterByDept);
router.get('/search/:id', Search.Search);

module.exports = router;