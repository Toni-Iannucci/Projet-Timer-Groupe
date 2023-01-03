const Task = require('../models/Task');



exports.createTask = (req, res, next) => {
    const task = new Task({
      // Va copier les champs dans le corps de la req
      // Peut aussi le faire comme ça : title: req.body.tittle,
        
      taskName: "Faire le back",
      projectName:"Projet",
      userId: 291,
      personne:"St",
      tempsTotal:899
  
    
  });
  // Sauvegarder les données 
  task.save()
    .then(() => res.status(201).json({ message: 'enregistré !'}))
    .catch(error => res.status(400).json({ error }));
  };

  // Modifier  les données
  exports.modifyTask = (req, res, next) => {
    Task.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };

  // Supprimer les données
  exports.deleteTask =  (req, res, next) => {
    Task.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  };

  // Chercher une donnée particuliere
  exports.getOneTask = (req, res, next) => {
    Task.findOne({ _id: req.params.id })
      .then(task => res.status(200).json(task))
      .catch(error => res.status(404).json({ error }));
  };

  // Récup toutes les données
  exports.getAllTasks = (req, res, next) => {
    // Trouver la liste complète 
    Task.find()
      // Retourne un tableau de tous les things dans la base de données 
      .then(tasks => res.status(200).json(tasks))
      .catch(error => res.status(400).json({ error }));
  };