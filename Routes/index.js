const express = require('express');
const router = express.Router();
const addEmployee = require('../Controller/AddEmployee');
const FilterByDept = require('../Controller/FilterByDept');
const Search = require('../Controller/Search');
const Salary = require('../Controller/Salary');
const Update = require('../Controller/Update');
const Delete = require('../Controller/Delete');


router.post('/add', addEmployee.addEmployee);
router.get('/dept/:department', FilterByDept.FilterByDept);
router.get('/search/:id', Search.Search);
router.get('/salary', Salary.Salary);
router.put('/update/:id', Update.Update);
router.delete('/delete/:id', Delete.Delete);
module.exports = router;