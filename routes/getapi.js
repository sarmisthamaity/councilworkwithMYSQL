const router = require('../routes/route.js');
const knex = require('../connection/connect.js');

router.get('/', (req,res) => {
    knex()
    .select("*")
    .from("councilpost")
    .then((data) => {
        console.log(data);
        res.send(data);
    }).catch((err) => {
        console.log(err);
        res.send(err);
    });
});

module.exports = router;