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

knex.schema.hasTable('councilmembers').then((exists) => {
    if(!exists){
        return knex.schema.createTable('councilmembers', (columnName) => {
            columnName.increments('id').primary();
            columnName.string("studentName");
            columnName.string("councilPost");
            columnName.string("workofPost");
            columnName.string("councilSdate");
            columnName.string("learning");
            columnName.integer("spentTimeonPost");
            columnName.integer("remaingDays");
        })
        .then(() => {
            console.log("table created");
        }).catch((err) => {
            console.log(err);
        });
    };
});

module.exports = knex;