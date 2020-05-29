'use strict';
let sqlDb;



exports.servicesDbSetup = function(s) {
  sqlDb = s;
  console.log("Checking if Service table exists");
  return sqlDb.schema.hasTable("Service").then(exists => {
    if (!exists) {
      console.log("It doesn't so we create it");
    } else {
      console.log("It exists.");
    }
  });
};


/**
 * Get a list of services
 * List of services
 *
 * ' /v2/services
 *
 * returns List
 **/
exports.servicesGET = function() {
  return sqlDb("Service").orderBy('Id_service')
  .then(data => {
    return data;
  });
}


/**
 * Get a service by ID
 * Service
 *
 * ' /v2/services/(Id_service)
 *
 * id_service Integer Service id
 * returns Service
 **/
exports.servicesId_serviceGET = function(id_service) {
  return sqlDb("Service").where({ Id_service : id_service}).then(data => {
    return data;
  });
}


/**
 * Get a list of service relative to an event
 * List of services
 *
 * ' /v2/services/servicesEvent/(Id_event)
 *
 * id_event Integer Event id
 * returns List
 **/
exports.servicesServicesEventId_eventGET = function(id_event) {
  return sqlDb("Service").where({ Id_event : id_event}).orderBy('Id_service').then(data =>{
    return data;
  });
}


/**
 * Get a list of service relative to a person
 * List of services
 *
 * ' /v2/services/servicesPerson/(Id_person)
 *
 * id_person Integer Event id
 * returns List
 **/
exports.servicesServicesPersonId_personGET = function(id_person) {
  return sqlDb("Service").join("Is involved in", "Service.Id_service", "=", "Is involved in.Id_service").where({ Id_person : id_person}).orderBy('Service.Id_service').then(data =>{
    return data;
  });
}
