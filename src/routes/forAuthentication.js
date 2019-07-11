const express = require('express');
const validate = require('express-validation');
const controller = require('../controllers/EmployeeController');
const router = express.Router();
const { createEmployee} = require('../validations/employeeValidations');

router

    .route('/api/login')

        .get(controller.get)

        .post(validate(createEmployee),controller.create)
        .put(controller.update);

//
router
.route('')
//
// module.exports = router;