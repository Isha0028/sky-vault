const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

// create a user using: post "/api/auth/createuser". No login required
//we are using post so that our passwords remain safe and also for big database we can use post.
router.post(
  "/createuser",
  [
    body("name", 'Enter a valid name').isLength({ min: 3 }),
    body("email", 'Enter a valid email').isEmail(),
    body("password",'Password must be of atleast 8 characters').isLength({ min: 8 })
  ],
  async(req, res) => {
    //If there are errors ,then return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
     return res.status(400).json({errors: errors.array()});
    }

    //Check whether the user with same email already exist 
  try{
      let user= await User.findOne({email: req.body.email});
      if(user){
       return res.status(400).json({ errors: 'Sorry , a user with this email already exist' });
      }
    
    //create a user
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      })

      res.json(user);
    
      
    }
  catch(error){
    console.error(error.message);
    res.status(500).send('some error occured');
  }
     
  });
  

module.exports = router;
