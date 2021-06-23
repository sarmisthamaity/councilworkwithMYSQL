const router = require('./route.js');
const knex = require('../connection/connect.js');

// create a post api for posting data in database;
router.post('/createdata/', (req, res) => {
    // inser the data in table in database;
    knex("councilmembers")
    .insert({
        studentName: req.body.studentName,
        councilPost: req.body.councilPost,
        workofPost: req.body.workofPost,
        councilSdate: req.body.councilSdate,
        learning: req.body.learning,
        spentTimeonPost: req.body.spentTimeonPost,
        remaingDays: req.body.remaingDays
    })
    .then(() => {
        res.send("dataposted")
    }).catch((err) => {
        res.send(err)
    });
});


module.exports = router;
