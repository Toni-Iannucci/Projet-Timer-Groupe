const express = require('express');
const router = express.Router();
const projetCtrl = require('../controllers/projet');
const authController = require('../controllers/userController');

/* **** ROUTES POUR DELETE/POST/UPDATE/GET ***** */

// Ajout des données
router.post('/',projetCtrl.createThing);
  
  // Modification d'un thing existant 
  router.put('/',projetCtrl.modifyThing);
  
  // Récup les objets 
  router.get('/',projetCtrl.getAllThings);
  // Récup un objet spécifique en trouvant son ID
  router.get('/:id',projetCtrl.getOneThing)
  
  // Supprime un thing de la BDD
  router.delete('/:id',projetCtrl.deleteThing);

 

  router.post('/signup', authController.signup);
  router.post('/signin', authController.signin);
module.exports = router;