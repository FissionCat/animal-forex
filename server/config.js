var fs = require('fs');
var path = require('path');

var config = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'config.json'), {encoding: 'utf8'}));

var connectionString = config.database.type + '://' + config.database.username +
    ':' + config.database.port + '@' + config.database.host + '/' + config.database.name;

exports.config = config;
exports.connectionString = connectionString;
