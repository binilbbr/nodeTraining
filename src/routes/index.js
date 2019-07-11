const express = require('express');
const employeeRoutes = require('./EmployeeRoutes');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.get('/status', (req, res) => res.send('<h1>OK</h1>'));
router.get('/status/test', (req, res) => res.send(`inside test`));
router.use('/employees', employeeRoutes);

router.get('/firstPage', (req, res) => {
  res.sendFile('/home/binilbiju/code/keyvalue/employee/src/template/firstPage.html');
});

router.get('/api', (req, res) => {

    res.json({
  
      message: 'Welcome to the API'
  
    });
  
  });
router.post('/api/user', (req, res) => {  

    res.json({
  
      message: 'Hello!!!'
  
    });
  
  });  

router.post('/api/login', (req, res) => {

    // Mock user
  
    const user = {
  
      id: 1, 
  
      username: 'jinilcs',
  
      email: 'jinilcs@gmail.com'
  
    }
  
  
  
    jwt.sign({user}, 'secretkey', { expiresIn: '120s' }, (err, token) => {
  
      res.json({
  
        token
  
      });
  
    });
  
  });

router.post('/api/posts', verifyToken, (req, res) => {  

    jwt.verify(req.token, 'secretkey', (err, authData) => {
  
      if(err) {
  
        res.sendStatus(401);
  
      } else {
  
        res.json({
  
          message: 'Post created...',
  
          authData
  
        });
  
      }
  
    });
  
  });  


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