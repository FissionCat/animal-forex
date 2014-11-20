var pg = require('pg.js'),
    sql = require('sql'),
    connectionString = "postgres://maria:5432@localhost/animal_forex";

var userTable = sql.define({
    // user is a reserved word
    name: 'users',
    columns: [{
        name: 'id',
        dataType: 'bigserial',
        primaryKey: true
    }, {
        name: 'name',
        dataType: 'varchar(40)',
        notNull: true
    }, {
        name: 'email',
        dataType: 'varchar(255)'
    }, {
        name: 'password',
        dataType: 'varchar(128)'
    }, {
        // crypto.randomBytes(16).toString('base64')
        name: 'salt',
        dataType: 'varchar(24)'
    }, {
        name: 'created_on',
        dataType: 'timestamp'
    }]
});

var itemTable = sql.define({
    name: 'item',
    columns: [{
        name: 'id',
        dataType: 'bigserial',
        primaryKey: true
    }]
});

var inventoryTable = sql.define({
    name: 'inventory',
    columns: [{
        name: 'user_id',
        dataType: 'bigint',
        references: {
            table: 'users',
            column: 'id'
        }
    }]
});

pg.connect(connectionString, function(error, client, done) {
    if (error) {
        console.log(error);
        return;
    }

    client.query(userTable.create().toQuery());
    done();
});

pg.end();
