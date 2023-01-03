const User = require('../models/UserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const signup = (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    return res.status(422).json({ error: 'Please fill all the fields' });
  }

  User.findOne({ email }).then((savedUser) => {
    if (savedUser) {
      return res.status(422).json({ error: 'Email already exists' });
    }

    bcrypt
      .hash(password, 12)
      .then((hashedPassword) => {
        const user = new User({
          username,
          email,
          password: hashedPassword,
        });

        user
          .save()
          .then((user) => {
            res.json({ message: 'Successfully registered' });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

const signin = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({ error: 'Please enter email and password' });
  }

  User.findOne({ email }).then((savedUser) => {
    if (!savedUser) {
      return res.status(422).json({ error: 'Invalid email or password' });
    }

    bcrypt
      .compare(password, savedUser.password)
      .then((doMatch) => {
        if (doMatch) {
          // generate token
          const token = jwt.sign({ _id: savedUser._id }, 'SECRET_KEY');
          res.json({ token });
        } else {
          return res.status(422).json({ error: 'Invalid email or password' });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

module.exports = {
  signup,
  signin,
};
