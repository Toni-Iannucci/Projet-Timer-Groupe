const express = require('express');
const router = express.Router();
const taskCtrl = require('../controllers/task');
const timerController = require('../controllers/timerController');

/* **** ROUTES POUR DELETE/POST/UPDATE/GET ***** */




// Ajout des données
router.post('/task',taskCtrl.createTask);
  // Modification d'un thing existant 
  router.put('/task',taskCtrl.modifyTask);
  // Récup les objets 
  router.get('/task',taskCtrl.getAllTasks);
  
  // Récup un objet spécifique en trouvant son ID
  router.get('/task/:id',taskCtrl.getOneTask)
  // Supprime un thing de la BDD
  router.delete('/task/:id',taskCtrl.deleteTask);

  // start timer 
  router.post('/:id/timer/start', timerController.startTimer);
  // pause timer 
  router.put('/:id/timer/pause', timerController.pauseTimer);
  // stop timer 
  router.put('/:id/timer/stop', timerController.stopTimer);
module.exports = router;