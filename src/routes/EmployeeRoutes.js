const express = require('express');
const validate = require('express-validation');
const controller = require('../controllers/EmployeeController');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { createEmployee} = require('../validations/employeeValidations');
// const { verifyToken } = require('../models/tokenValidation')


router

    .route('/')

        .get(controller.get)
        // .post(verifyToken, (req, res, next) => {  

        //     jwt.verify(req.token, 'secretkey', (err, authData) => {
          
        //       if(err) {
          
        //         res.sendStatus(401);
          
        //       } else {

        //             // console.log('validate not working');
        //             // validate(createEmployee);
        //             // controller.create;
        //             next();
          
        //       }
          
        //     });
          
        //   },validate(createEmployee),controller.create) //token validation before post
        //.post(validate(createEmployee),controller.create)
        .post(controller.create)
        .put(controller.update);

//
router
  .route('/:id')
  .get(controller.getOneEmployee );

function verifyToken(req, res, next) {

    // Get auth header value
  
    const bearerHeader = req.headers['authorization'];
  
    // Check if bearer is undefined
  
    if(typeof bearerHeader !== 'undefined') {
  
      // Split at the space
  
      const bearer = bearerHeader.split(' ');
  
      // Get token from array
  
      const bearerToken = bearer[1];
  
      // Set the token
  
      req.token = bearerToken;
  
      // Next middleware
  
      next();
  
    } else {
  
      // Forbidden
  
      res.sendStatus(403);
  
    }
  
  
  
  }  
  
//

module.exports = router;