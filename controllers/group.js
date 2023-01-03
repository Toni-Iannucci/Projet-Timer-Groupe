const Group = require('../models/Group');



exports.createGroup = (req, res, next) => {
    const group = new Group({
      // Va copier les champs dans le corps de la req
      // Peut aussi le faire comme ça : title: req.body.tittle,
        
    groupName:"Pingouin",
  
  });
  // Sauvegarder les données 
  group.save()
    .then(() => res.status(201).json({ message: 'enregistré !'}))
    .catch(error => res.status(400).json({ error }));
  };

  // Modifier  les données
  exports.modifyGroup = (req, res, next) => {
    Group.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };

  // Supprimer les données
  exports.deleteGroup =  (req, res, next) => {
        Group.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Groupe supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  };

  // Chercher une donnée particuliere
  exports.getOneGroup = (req, res, next) => {
    Group.findOne({ _id: req.params.id })
      .then(group => res.status(200).json(group))
      .catch(error => res.status(404).json({ error }));
  };

  // Récup toutes les données
  exports.getAllGroups = (req, res, next) => {
    // Trouver la liste complète 
    Group.find()
      // Retourne un tableau de tous les things dans la base de données 
      .then(groups => res.status(200).json(groups))
      .catch(error => res.status(400).json({ error }));
  };