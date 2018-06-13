var spellFs = require('spell-fs');
var path = require('path');
var dbPath = __dirname + '/../db/db.json';

var dao = {
    readAll : function() {
        return spellFs.readFileP(dbPath)
    },
}

module.exports = dao