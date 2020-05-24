'use strict';
let sqlDb;



exports.servicesDbSetup = function(s) {
  sqlDb = s;
  console.log("Controllo se ci sta la tabella");
  return sqlDb.schema.hasTable("Service").then(exists => {
    console.log("ciao");
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
 * ' /services
 * returns List
 **/
exports.servicesGET = function() {
  return sqlDb("Service")
  .then(data => {
    return data;
  });
}


/**
 * Get a service by ID
 * Service
 * ' /services/(Id_service)
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
 * ' /services/servicesEvent/(Id_event)
 * id_event Integer Event id
 * returns List
 **/
exports.servicesServicesEventId_eventGET = function(id_event) {
  return sqlDb("Service").where({ Id_event : id_event}).then(data =>{
    return data;
  });
}


/**
 * Get a list of service relative to a person
 * List of services
 * ' /services/servicesPerson/(Id_person)
 * id_person Integer Event id
 * returns List
 **/
exports.servicesServicesPersonId_personGET = function(id_person) {
  return sqlDb("Service").join("Is involved in", "Service.Id_service", "=", "Is involved in.Id_service").where({ Id_person : id_person}).then(data =>{
    return data;
  });
}





/**
 * Get a list of services
 * List of services
 *
 * returns List
 **/
/*exports.servicesGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "Id_service" : 2,
  "Name" : "Non Plastich Beach",
  "Presentation" : "Somewhere a long the line it has started - the pollution of our beaches, coastlines and ocean. We can not look away anymore, if you see plastic floating around in the waves or stuck on the beach. Just collect it - bin it - feel good! We try to spread the concept of the non-usability of plastic on the beach.",
  "Info" : "list of something"
}, {
  "Id_service" : 2,
  "Name" : "Non Plastich Beach",
  "Presentation" : "Somewhere a long the line it has started - the pollution of our beaches, coastlines and ocean. We can not look away anymore, if you see plastic floating around in the waves or stuck on the beach. Just collect it - bin it - feel good! We try to spread the concept of the non-usability of plastic on the beach.",
  "Info" : "list of something"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}*/


/**
 * Get a service by ID
 * Service
 *
 * id_service Integer Service id
 * returns Service
 **/
/*exports.servicesId_serviceGET = function(id_service) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Id_service" : 2,
  "Name" : "Non Plastich Beach",
  "Presentation" : "Somewhere a long the line it has started - the pollution of our beaches, coastlines and ocean. We can not look away anymore, if you see plastic floating around in the waves or stuck on the beach. Just collect it - bin it - feel good! We try to spread the concept of the non-usability of plastic on the beach.",
  "Info" : "list of something"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}*/


/**
 * Get a list of service relative to an event
 * List of services
 *
 * id_event Integer Event id
 * returns List
 **/
/*exports.servicesServicesEventId_eventGET = function(id_event) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "Id_service" : 2,
  "Name" : "Non Plastich Beach",
  "Presentation" : "Somewhere a long the line it has started - the pollution of our beaches, coastlines and ocean. We can not look away anymore, if you see plastic floating around in the waves or stuck on the beach. Just collect it - bin it - feel good! We try to spread the concept of the non-usability of plastic on the beach.",
  "Info" : "list of something"
}, {
  "Id_service" : 2,
  "Name" : "Non Plastich Beach",
  "Presentation" : "Somewhere a long the line it has started - the pollution of our beaches, coastlines and ocean. We can not look away anymore, if you see plastic floating around in the waves or stuck on the beach. Just collect it - bin it - feel good! We try to spread the concept of the non-usability of plastic on the beach.",
  "Info" : "list of something"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}*/


/**
 * Get a list of service relative to a person
 * List of services
 *
 * id_person Integer Event id
 * returns List
 **/
/*exports.servicesServicesPersonId_personGET = function(id_person) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "Id_service" : 2,
  "Name" : "Non Plastich Beach",
  "Presentation" : "Somewhere a long the line it has started - the pollution of our beaches, coastlines and ocean. We can not look away anymore, if you see plastic floating around in the waves or stuck on the beach. Just collect it - bin it - feel good! We try to spread the concept of the non-usability of plastic on the beach.",
  "Info" : "list of something"
}, {
  "Id_service" : 2,
  "Name" : "Non Plastich Beach",
  "Presentation" : "Somewhere a long the line it has started - the pollution of our beaches, coastlines and ocean. We can not look away anymore, if you see plastic floating around in the waves or stuck on the beach. Just collect it - bin it - feel good! We try to spread the concept of the non-usability of plastic on the beach.",
  "Info" : "list of something"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}*/
