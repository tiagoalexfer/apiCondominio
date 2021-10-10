var knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'condominiodb'
    }
});

module.exports = knex

// const Sequelize = require('sequelize')

// const username = process.env.DBUSER;
// const password = process.env.DBPASS;
// const database = process.env.DBDATABASE;
// const host = process.env.DBHOST;
// const dialect = process.env.DBDIALECT;

// const connection = new Sequelize(database, username,password,{
//     host,
//     dialect
// })

// module.exports = connection