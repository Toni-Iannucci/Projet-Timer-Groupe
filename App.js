const express = require('express');
const mongoose = require('mongoose');
const Task = require('./models/Task');
const projectRoutes = require('./routes/project');
const groupRoutes = require('./routes/group');
const taskRoutes = require('./routes/task');

const app = express();
// Permet d'intercepter les requêtes qui contiennent sur Json et mettent à disposition sur l'objet requête
app.use(express.json());
app.use(projectRoutes);
app.use(groupRoutes);
app.use(taskRoutes);



// Connection BDD
// Correspond à l'utilsateur que nous avons fait dans mongoAtlas
// Ici l'utilisateur peut modifier et écrire dans la BDD
mongoose.connect('mongodb+srv://Toni:Tonic@cluster0.wxdzvma.mongodb.net/?retryWrites=true&w=majority',
{ useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// Permet l'accés à notre API
// D'ajouter les headers aux requêtes
// D'envoyer des requêtes avec les méthodes
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Ici à la place du '/' mettre la route vers le truc 
// Exemple /api/stuff
// app.use('/',taskRoutes);
module.exports = app;