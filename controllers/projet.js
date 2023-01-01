const Thing = require('../models/Thing');



exports.createThing = (req, res, next) => {
    const thing = new Thing({
      // Va copier les champs dans le corps de la req
      // Peut aussi le faire comme ça : title: req.body.tittle,
        /* Test
      taskName: "Coucou",
      projectName:"Couco",
      userId: 29  1,
      personne:"Toni",
      tempsTotal:899
  */
    ...req.body
  });
  // Sauvegarder les données 
  thing.save()
    .then(() => res.status(201).json({ message: 'enregistré !'}))
    .catch(error => res.status(400).json({ error }));
  };

  // Modifier  les données
  exports.modifyThing = (req, res, next) => {
    Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };

  // Supprimer les données
  exports.deleteThing =  (req, res, next) => {
    Thing.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  };

  // Chercher une donnée particuliere
  exports.getOneThing = (req, res, next) => {
    Thing.findOne({ _id: req.params.id })
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(404).json({ error }));
  };

  // Récup toutes les données
  exports.getAllThings = (req, res, next) => {
    // Trouver la liste complète 
    Thing.find()
      // Retourne un tableau de tous les things dans la base de données 
      .then(things => res.status(200).json(things))
      .catch(error => res.status(400).json({ error }));
  };