const express = require('express');
const router = express.Router();
const groupCtrl = require('../controllers/group');
const timerController = require('../controllers/timerController');
const authController = require('../controllers/UserController');


/* **** ROUTES POUR DELETE/POST/UPDATE/GET ***** */


// Ajout des données
router.post('/group',groupCtrl.createGroup);
  // Modification d'un thing existant 
  router.put('/group',groupCtrl.modifyGroup);
  // Récup les objets 
  router.get('/group',groupCtrl.getAllGroups);
  
  // Récup un objet spécifique en trouvant son ID
  router.get('/group/:id',groupCtrl.getOneGroup)
  // Supprime un thing de la BDD
  router.delete('/group/:id',groupCtrl.deleteGroup);


  
  // start timer 
  router.post('/:id/timer/start', timerController.startTimer);
  // pause timer 
  router.put('/:id/timer/pause', timerController.pauseTimer);
  // stop timer 
  router.put('/:id/timer/stop', timerController.stopTimer);
module.exports = router;