// 1 st step: Importer express.
const express = require("express");

// 2nd step: Créez un objet routeur express.
const router = express.Router();

// 3rd step: Importer le contrôleur précédemment créé à partir de notre dossier de contrôleurprofile.js
const profileController = require('../controllers/profile')

// 4th step: Créez le routeur et ajoutez la fonction controller en tant que rappel pour traiter la demande.
router.post('/profile', profileController.newProfile);
router.get('/profile', profileController.getProfile);

// 5th step: Exporter l’itinéraire pour que nous puissions l’utiliser dans server.js
module.exports = router;