const Project = require('../models/Project');



exports.createProject = (req, res, next) => {
    const project = new Project({
      // Va copier les champs dans le corps de la req
      // Peut aussi le faire comme ça : title: req.body.tittle,
        /* Test
      projectName:"Coucou",
  */
    ...req.body
  });
  // Sauvegarder les données 
  project.save()
    .then(() => res.status(201).json({ message: 'enregistré !'}))
    .catch(error => res.status(400).json({ error }));
  };

  // Modifier  les données
  exports.modifyTask = (req, res, next) => {
    Project.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };

  // Supprimer les données
  exports.deleteProject =  (req, res, next) => {
    Project.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  };

  // Chercher une donnée particuliere
  exports.getOneProject = (req, res, next) => {
    Project.findOne({ _id: req.params.id })
      .then(project => res.status(200).json(project))
      .catch(error => res.status(404).json({ error }));
  };

  // Récup toutes les données
  exports.getAllProjects = (req, res, next) => {
    // Trouver la liste complète 
    Project.find()
      // Retourne un tableau de tous les things dans la base de données 
      .then(projects => res.status(200).json(projects))
      .catch(error => res.status(400).json({ error }));
  };