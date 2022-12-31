const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

exports.register = (req, res) => {
  const { username, password, email } = req.body;

  // Vérifiez si l'utilisateur existe déjà
  User.findOne({ email }).then(user => {
    if (user) {
      return res.status(400).json({ error: 'L\'utilisateur existe déjà' });
    } else {
      // Créez un nouvel utilisateur
      const newUser = new User({
        username,
        password,
        email
      });

      // Chiffrez le mot de passe avant de l'enregistrer en base de données
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
};
