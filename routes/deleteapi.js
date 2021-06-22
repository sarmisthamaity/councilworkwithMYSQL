const router = require("./route.js");
const knex = require("../connection/connect.js");

router.delete('datadel/:name', (req, res) => {
    knex("councilpost")
    .where({trainingPCname: req.params.name}).del()
    .then(() => {
        console.log("data deleted");
        res.send("data deleted");
    }).catch((err) => {
        console.log(err);
        res.send(err);
    });
});


module.exports = router;