const Projet = require('../models/Projet');
// Coucou


exports.createProjet = (req, res, next) => {
    const projet = new Projet({
      // Va copier les champs dans le corps de la req
      // Peut aussi le faire comme ça : title: req.body.tittle,
        /* 
      projectName:"Faire le front ",
      
  */
    ...req.body
  });
  // Sauvegarder les données 
  projet.save()
    .then(() => res.status(201).json({ message: 'enregistré !'}))
    .catch(error => res.status(400).json({ error }));
  };

  // Modifier  les données
  exports.modifyProjet = (req, res, next) => {
    Projet.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };

  // Supprimer les données
  exports.deleteProjet =  (req, res, next) => {
    Projet.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  };

  // Chercher une donnée particuliere
  exports.getOneProjet = (req, res, next) => {
    Projet.findOne({ _id: req.params.id })
      .then(projet => res.status(200).json(projet))
      .catch(error => res.status(404).json({ error }));
  };

  // Récup toutes les données
  exports.getAllProjets = (req, res, next) => {
    // Trouver la liste complète 
    Projet.find()
      // Retourne un tableau de tous les things dans la base de données 
      .then(projets => res.status(200).json(projets))
      .catch(error => res.status(400).json({ error }));
  };