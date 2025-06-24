const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');


//importing the profile route
const profileRoutes=require('./routes/profile');

app.use(cors());
app.use(express.json());

require('dotenv').config({ path: "./config.env" });
const PORT = process.env.PORT || 5001;

//using the route
app.use('/',profileRoutes)

// Configuration pour la production - doit être placé APRÈS vos autres routes
if (process.env.NODE_ENV === "production") {
  // Serve les fichiers statiques du build React
  app.use(express.static(path.join(__dirname, "client/build")));

  // Gère les requêtes GET qui ne correspondent à aucune route API
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}) .then(() => {
    console.log("MongoDB connected successfully");
}) .catch((err) => {
    console.error("MongoDB connection error:", err);
});

app.listen(PORT, ()=>{
    console.log(`Server is rinning on http://localhost:${PORT}`);
})

