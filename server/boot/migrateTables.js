'use strict';

module.exports = migrateTables;

function migrateTables(server) {
  var postgresql = server.datasources.postgresql;

  postgresql.automigrate();
}
