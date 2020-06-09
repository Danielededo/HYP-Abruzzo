let { peopleDbSetup } = require("./PersonService");
let { eventsDbSetup } = require("./EventService");
let { servicesDbSetup } = require("./ServiceService");

const sqlDbFactory = require("knex");
let sqlDb = sqlDbFactory({
  debug: true,
  client: "pg",
  connection: {
    host : 'ec2-54-247-71-245.eu-west-1.compute.amazonaws.com',
    user : 'dzgknrdvozmlfy',
    password : '3a53091edfabd16709613ca3447cdaac5e1cb578a7991111a3cbfa97e7f85e96',
    database : 'd1rdknsu51n087'
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
