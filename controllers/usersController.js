const express = require('express');
const db = require('../models')
const { check, validationResult } = require('express-validator');
const router = express.Router();

router.get('/', (req, res) => {
  db.User.find({})
  .then((foundUser) => {
    res.json({users: foundUser})
  })
  .catch((err) => {
    console.log('Error on index.route', err);
    res.json({Error: 'Unable to retrieve user'})
  })
});

router.get('/:id', (req, res) => {
  db.User.findById(req.params.id)
  .then((foundUser) => {
    res.json({user: foundUser})
  })
  .catch((err) => {
    console.log('Error on show route', err)
    res.json({Error: 'Unable to retrieve data'})
  })
});

router.post('/', [
  //express validation
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Please enter a password with 6 or more characters')
  .isLength({min: 6})
], async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()})
  }

  const { name, email, password } = req.body;

  //user registration (see if user exists, encrypt password, return jsonwebtoken)

  try { 

    db.User.create(req.body)
    .then((savedUser) => {
      res.json({user: savedUser})
    }) 
    .catch((err) => {
      console.log('Error in create route', err)
      res.json({Error: 'Unable to save data'})
    })
    
  } catch(err) {

  }


});

module.exports = router;