let { peopleDbSetup } = require("./PersonService");
let { eventsDbSetup } = require("./EventService");
let { servicesDbSetup } = require("./ServiceService");

const sqlDbFactory = require("knex");
let sqlDb = sqlDbFactory({
  debug: true,
  client: "pg",
  connection: {
    host : 'ec2-54-247-169-129.eu-west-1.compute.amazonaws.com',
    user : 'luysuiqcnkcxco',
    password : '4792177a845880f63d277e6563858ca889d0922c0fa1513a139c1a3e6a94ae66',
    database : 'dbhjpjm0t9u879'
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
