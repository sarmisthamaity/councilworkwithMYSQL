const router = require('./route.js');
const knex = require('../connection/connect.js');

router.post('/', (req, res) => {
    knex("councilpost")
    .insert({
        disciplineCname: req.body.disciplineCname,
        foodCname: req.body.foodCname,
        treaSurername: req.body.treaSurername,
        facilityMname: req.body.facilityMname,
        trainingPCname: req.body.trainingPCname,
        genSecname: req.body.genSecname,
        healthCname: req.body.healthCname
    })
    .then(() => {
        res.send("dataposted")
    }).catch((err) => {
        res.send(err)
    });
});

module.exports = router;
