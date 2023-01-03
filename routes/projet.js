const express = require('express');
const router = express.Router();
const projetCtrl = require('../controllers/projet');

/* **** ROUTES POUR DELETE/POST/UPDATE/GET ***** */




// Ajout des données
router.post('/projet',projetCtrl.createProjet);
  // Modification d'un thing existant 
  router.put('/projet',projetCtrl.modifyProjet);
  // Récup les objets 
  router.get('/projet',projetCtrl.getAllProjets);
  
  // Récup un objet spécifique en trouvant son ID
  router.get('/projet/:id',projetCtrl.getOneProjet)
  // Supprime un thing de la BDD
  router.delete('/projet/:id',projetCtrl.deleteProjet);
module.exports = router;