const express = require('express');
const mongoose = require('mongoose');
const Thing = require('./models/thing');

const app = express();

// Permet d'intercepter les requêtes qui contiennent sur json et mettent à disposition sur l'objet requête
app.use(express.json());

// Connection BDD
// Correspond à l'utilsateur que nous avons fait dans mongoAtlas
// Ici l'utilisateur peut modifier et écrire dans la BDD
mongoose.connect('mongodb+srv://Toni:Tonic@cluster0.wxdzvma.mongodb.net/?retryWrites=true&w=majorityy',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));



/* **** ROUTES POUR DELETE/POST/UPDATE/GET ***** */


// Permet l'accés à notre API
// D'ajouter les headers aux requêtes
// D'envoyer des requêtes avec les méthodes
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Ajout des données 
app.post('/', (req, res, next) => {
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
});

// Modification d'un thing existant 
app.put('/', (req, res, next) => {
  Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'modifié !'}))
    .catch(error => res.status(400).json({ error }));
});


// Récup les objets 
app.get('/', (req, res, next) => {
  // Trouver la liste complète 
  Thing.find()
    // Retourne un tableau de tous les things dans la base de données 
    .then(things => res.status(200).json(things))
    .catch(error => res.status(400).json({ error }));
});
// Récup un objet spécifique en trouvant son ID
app.get('/', (req, res, next) => {
  Thing.findOne({ _id: req.params.id })
    .then(thing => res.status(200).json(thing))
    .catch(error => res.status(404).json({ error }));
});

// Supprime un thing de la BDD
app.delete('/:id', (req, res, next) => {
  Thing.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
    .catch(error => res.status(400).json({ error }));
});
module.exports = app;