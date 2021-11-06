// la constante express requiert le module express
const express = require('express');
// la constante app execute express
const app = express();
const path = require("path");

// la constante userController requiert le fichier user
/* on va effectuer les changement a partir du fichier user */
const userController = require("./controllers/user");

app.use(express.json());
const message = { msg: "coucou"};

app.get("/", (req,res) =>{
    res.sendFile(path.join(__dirname, "./vews/index.html"));
});

app.get("/users", userController.read);

app.post("/users", userController.create);

app.delete("/users", userController.delete);

app.listen(5500, ()=> {
    console.log("server running on port 5500");
});
//npm run dev pour lancer le server avec nodemon