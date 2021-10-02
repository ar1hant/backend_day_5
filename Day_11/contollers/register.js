/*
  lvl-3
  check if email already exists
  password hash
  email lowercase arihantdaga100@gmail.com / Arihantdaga100@gmail.com
  save
*/
const User = require('../models/user');
const bcrypt = require('bcrypt');

const register = async (req, res) => {
  const { email, password } = req.body;
  try{
    const alreadyExists = await User.findOne({ where: { email }});
    if(alreadyExists){
      res.status(401).send("Email alrady exists");
    }
    else{
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      const newUser = new User({ email: email.toLowerCase(), password: hash, fullName: "Arihant"});
      const savedUser = await newUser.save();
      res.status(201).send(savedUser);
    }
  }
  catch(err){
    console.error(err);
    res.status(500).send("Something Went Wrong");
  }
}

module.exports = register;