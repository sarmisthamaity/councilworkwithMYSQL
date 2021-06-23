const router = require("./route.js");              // importing the route file 
const knex = require("../connection/connect.js");  // import connection folder for creating a connection with database;


// create a delete api for deleting data from database;
router.delete('/datadel/:name', (req, res) => {                
    knex("councilmembers")
    .where({studentName: req.params.name}).del()         // params for which name it will delete
    .then(() => {
        console.log("data deleted");
        res.send("data deleted");
    }).catch((err) => {
        console.log(err);
        res.send(err);
    });
});


module.exports = router;