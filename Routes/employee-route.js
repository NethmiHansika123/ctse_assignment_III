const express = require('express');
const router = express.Router();
const EmployeeController = require('../Controllers/employee-controller');

router.post('/add', EmployeeController.AddDetails);
router.get('/', EmployeeController.getDetails);
router.get('/edit/:id', EmployeeController.editDetails);
router.post('/update/:id', EmployeeController.updateDetails);
router.post('/delete/:id', EmployeeController.deleteDetails);
module.exports = router;   