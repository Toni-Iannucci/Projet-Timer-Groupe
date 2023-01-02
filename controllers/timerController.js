const Project = require('../models/Task');

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

exports.pauseTimer = (req, res) => {
  const { id } = req.params;

  Project.findById(id).then(project => {
    if (!project) {
      return res.status(404).json({ error: 'Projet introuvable' });
    }

    // Mettre en pause le timer du projet en enregistrant la durée écoulée depuis le démarrage du timer
    const elapsedTime = Date.now() - project.timerStart;
    project.totalDuration += elapsedTime;
    project.timerStart = null;
    project
      .save()
      .then(project => res.json(project))
      .catch(err => console.log(err));
  });
};

exports.stopTimer = (req, res) => {
  const { id } = req.params;

  Project.findById(id).then(project => {
    if (!project) {
      return res.status(404).json({ error: 'Projet introuvable' });
    }

    // Arrêtez le timer du projet en remettant la durée totale à zéro
    project.totalDuration = 0;
    project.timerStart = null;
    project
      .save()
      .then(project => res.json(project))
      .catch(err => console.log(err));
  });
};

