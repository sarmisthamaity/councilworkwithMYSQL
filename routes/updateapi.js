// import the route file  
const router = require('./route.js');
// import the connection folder 
const knex = require('../connection/connect.js');

// create a put api for update the data;
router.put('/dataput/:id', (req, res) => {
    knex("councilmembers")
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