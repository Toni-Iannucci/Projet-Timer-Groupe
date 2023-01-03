const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// Va hasher le mot de passe
exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        email: req.body.email,
        // Va enregistrer le hash que nous avons crée juste au dessus 
        password: hash,
        username: req.body.username
      });
      user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
      .then(user => {
          if (!user) {
              return res.status(401).json({ error: 'Utilisateur non trouvé !' });
          }
          bcrypt.compare(req.body.password, user.password)
              .then(valid => {
                  if (!valid) {
                      return res.status(401).json({ error: 'Mot de passe incorrect !' });
                  }
                  res.status(200).json({
                      userId: user._id,
                      token: jwt.sign(
                          { userId: user._id },
                          'RANDOM_TOKEN_SECRET',
                          { expiresIn: '24h' }
                      )
                  });
              })
              .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
};
/*
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
*/