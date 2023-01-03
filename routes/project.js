const express = require('express');
const router = express.Router();
const projectCtrl = require('../controllers/project');

/* **** ROUTES POUR DELETE/POST/UPDATE/GET ***** */




// Ajout des données
router.post('/project',projectCtrl.createProject);
  // Modification d'un thing existant 
  router.put('/project',projectCtrl.modifyProject);
  // Récup les objets 
  router.get('/project',projectCtrl.getAllProjects);
  
  // Récup un objet spécifique en trouvant son ID
  router.get('/project/:id',projectCtrl.getOneProject)
  // Supprime un thing de la BDD
  router.delete('/project/:id',projetcCtrl.deleteProject);
module.exports = router;