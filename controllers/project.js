const Project = require('../models/Project');



exports.createProject = (req, res, next) => {
    const project = new Project({
      // Va copier les champs dans le corps de la req
      // Peut aussi le faire comme ça : title: req.body.tittle,
        
      projectName:"Chimba",
  
  });
  // Sauvegarder un projet 
  project.save()
    .then(() => res.status(201).json({ message: 'Project saved !!'}))
    .catch(error => res.status(400).json({ error }));
  };

  // Modifier un projet
  exports.modifyProject = (req, res, next) => {
    Project.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Project updated !!'}))
      .catch(error => res.status(400).json({ error }));
  };

  // Supprimer un projet
  exports.deleteProject =  (req, res, next) => {
    Project.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Project deleted !'}))
      .catch(error => res.status(400).json({ error }));
  };

  // Chercher un projet particulier
  exports.getOneProject = (req, res, next) => {
    Project.findOne({ _id: req.params.id })
      .then(project => res.status(200).json(project))
      .catch(error => res.status(404).json({ error }));
  };

  // Récup tous les projets
  exports.getAllProjects = (req, res, next) => {
    // Trouver la liste complète 
    Project.find()
      // Retourner un tableau de tous les projets dans la base de données 
      .then(projects => res.status(200).json(projects))
      .catch(error => res.status(400).json({ error }));
  };