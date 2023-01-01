const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
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
