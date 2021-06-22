const dotenv = require("dotenv").config();

const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: process.env.HOST,
        user: "root",
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    }
});

knex.schema.hasTable('councilpost').then((exists) => {
    if(!exists){
        return knex.schema.createTable('councilpost', (columnName) => {
            columnName.increments('id').primary();
            columnName.string("disciplineCname");
            columnName.string("foodCname");
            columnName.string("treaSurername");
            columnName.string("facilityMname");
            columnName.string("trainingPCname");
            columnName.string("genSecname");
            columnName.string("healthCname");
        })
        .then(() => {
            console.log("table created");
        }).catch((err) => {
            console.log(err);
        });
    };
});


module.exports = knex;