'use strict';


/**
 * Get the event relative to that person
 * Event
 *
 * id_person Integer person that is the contact for that event
 * returns Event
 **/
exports.eventEventPersonId_personGET = function(id_person) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Id_event" : 1,
  "Name" : "Beach cleaning",
  "Presentation" : "Beach cleaning or clean-up is the process of removing solid litter, dense chemicals, and organic debris deposited on a beach or coastline by the tide, local visitors, or tourists.",
  "date" : "22/10/20"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the event relative to the service
 * Event
 *
 * id_service Integer service that the event present
 * returns Event
 **/
exports.eventEventServiceId_serviceGET = function(id_service) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Id_event" : 1,
  "Name" : "Beach cleaning",
  "Presentation" : "Beach cleaning or clean-up is the process of removing solid litter, dense chemicals, and organic debris deposited on a beach or coastline by the tide, local visitors, or tourists.",
  "date" : "22/10/20"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get an event by ID
 * Event
 *
 * id_event Integer Event id
 * returns Event
 **/
exports.eventId_eventGET = function(id_event) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Id_event" : 1,
  "Name" : "Beach cleaning",
  "Presentation" : "Beach cleaning or clean-up is the process of removing solid litter, dense chemicals, and organic debris deposited on a beach or coastline by the tide, local visitors, or tourists.",
  "date" : "22/10/20"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Gets a list of event by month
 * The event of the specified month
 *
 * month Integer month of this event
 * returns List
 **/
exports.eventsMonthGET = function(month) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "Id_event" : 1,
  "Name" : "Beach cleaning",
  "Presentation" : "Beach cleaning or clean-up is the process of removing solid litter, dense chemicals, and organic debris deposited on a beach or coastline by the tide, local visitors, or tourists.",
  "date" : "22/10/20"
}, {
  "Id_event" : 1,
  "Name" : "Beach cleaning",
  "Presentation" : "Beach cleaning or clean-up is the process of removing solid litter, dense chemicals, and organic debris deposited on a beach or coastline by the tide, local visitors, or tourists.",
  "date" : "22/10/20"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

