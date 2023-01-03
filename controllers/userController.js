const User = require('../models/user');
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
 const login = (req, res) => {
  const { email, password } = req.body;

  // Vérifiez si l'utilisateur existe
  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({ error: 'L\'utilisateur n\'existe pas' });
    }

    // Vérifiez le mot de passe
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // Créez un token JWT
        const payload = { id: user.id, username: user.username };
        jwt.sign(
          payload,
          process.env.SECRET_OR_KEY,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token
            });
          }
        );
      } else {
        return res.status(400).json({ error: 'Mot de passe incorrect' });
      }
    });
  });
};
