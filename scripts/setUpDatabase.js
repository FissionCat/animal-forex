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
        dataType: 'varchar(255)',
        notNull: true
    }, {
        name: 'password',
        dataType: 'varchar(128)',
        notNull: true
    }, {
        // crypto.randomBytes(16).toString('base64')
        name: 'salt',
        dataType: 'varchar(24)',
        notNull: true
    }, {
        name: 'created_on',
        dataType: 'timestamp',
        notNull: true
    }]
});

var itemTable = sql.define({
    name: 'item',
    columns: [{
        name: 'id',
        dataType: 'bigserial',
        primaryKey: true
    }, {
        name: 'name',
        dataType: 'varchar(40)',
        notNull: true
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
        },
        notNull: true
    }, {
        name: 'item_id',
        dataType: 'bigint',
        references: {
            table: 'item',
            column: 'id'
        },
        notNull: true
    }, {
        name: 'want',
        dataType: 'boolean',
    }, {
        name: 'have',
        dataType: 'boolean'
    }, {
        name: 'catalogue',
        dataType: 'boolean'
    }]
});

pg.connect(connectionString, function(error, client, done) {
    if (error) {
        console.log(error);
        return;
    }

    client.query(userTable.create().toQuery());
    client.query(itemTable.create().toQuery());
    client.query(inventoryTable.create().toQuery());
    done();
});

pg.end();
