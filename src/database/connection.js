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


