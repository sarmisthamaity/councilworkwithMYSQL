const router = require('../routes/route.js');       // requireing a route file;
const knex = require('../connection/connect.js');

// create a get api for get thedetails;
router.get('/', (req,res) => {
    knex()
    .select("*")
    .from("councilmembers")
    .then((data) => {
        console.log(data);
        res.send(data);
    }).catch((err) => {
        console.log(err);
        res.send(err);
    });
});

router.get('/dataByname/:name', (req, res) => {
    knex()
    .from("councilmembers")
    .select("*")
    .where({studentName: req.params.name})
    .then((data) => {
        console.log(data);
        res.send(data);
    }).catch((err) => {
        console.log(err);
        res.send(err);
    });
});
module.exports = router;