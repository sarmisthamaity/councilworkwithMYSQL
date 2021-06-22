const router = require('./route.js');
const knex = require('../connection/connect.js');

router.put('dataput/:id', (req, res) => {
    knex("councilpost")
    .where({id: req.params.id}).update(req.body)
    .then(() => {
        console.log("data updated");
        res.send("data updated");
    }).catch((err) => {
        console.log(err);
        res.send(err)
    });
});

module.exports = router;