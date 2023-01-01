const express = require('express');
const router = express.Router();
const projetCtrl = require('../controllers/projet');
const projectController = require('../controllers/timerController');

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
  // start timer 
  router.post('/:id/timer/start', projectController.startTimer);
  // pause timer 
  router.put('/:id/timer/pause', projectController.pauseTimer);
  // stop timer 
  router.put('/:id/timer/stop', projectController.stopTimer);
module.exports = router;