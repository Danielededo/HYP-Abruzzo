let { peopleDbSetup } = require("./PersonService");
let { eventsDbSetup } = require("./EventService");
let { servicesDbSetup } = require("./ServiceService");

const sqlDbFactory = require("knex");
let sqlDb = sqlDbFactory({
  debug: true,
  client: "pg",
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'ladroga96',
    database : 'postgres'
  },
  ssl: true
});

function setupDataLayer() {
  console.log("Setting up Data Layer");
  eventsDbSetup(sqlDb);
  servicesDbSetup(sqlDb);
  return peopleDbSetup(sqlDb);
}

module.exports = { database: sqlDb, setupDataLayer };
