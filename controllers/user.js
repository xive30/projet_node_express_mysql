//on fait appel a la config de notre base de données
const bdd = require("./../db/config");

const userController = {
    create: (req, res) => {
        const sql = "INSERT INTO  users (pseudo, password, email) VALUES ('','','')"; /*que doit on préciser dans les valeurs */
        bdd.query(sql, function(err, result) {
            if (err) throw err; //erreur de création
            console.log("1 record inserted");
        });
        res.json({ message: "1 record inserted"});
    },


    update: (req, res) => {},


    read: (req, res) => {
        const sql = "SELECT * FROM users";
        bdd.query(sql,function (err, result) {
            if (err) throw err; // erreur de lecture
            res.json(result);
        });
    },

// fonction à vérifier
    delete: (req, res) => {
        const sql = "DELETE * FROM users";
        bdd.query(sql, function(err, result) {
            if (err) throw err; // erreur personne non trouvée
            res.json(result);
        });
    },
}

module.exports = userController;
