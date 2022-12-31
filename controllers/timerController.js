const Project = require('../models/Thing');

exports.startTimer = (req, res) => {
  const { id } = req.params;

  Project.findById(id).then(project => {
    if (!project) {
      return res.status(404).json({ error: 'Projet introuvable' });
    }

    // Démarrez le timer du projet en enregistrant l'heure actuelle
    project.timerStart = Date.now();
    project
      .save()
      .then(project => res.json(project))
      .catch(err => console.log(err));
  });
};
