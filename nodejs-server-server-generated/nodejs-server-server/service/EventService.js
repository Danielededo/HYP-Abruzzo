'use strict';
let sqlDb;



exports.eventsDbSetup = function(s) {
  sqlDb = s;
  console.log("Controllo se ci sta la tabella");
  return sqlDb.schema.hasTable("Event").then(exists => {
    console.log("ciao");
    if (!exists) {
      console.log("It doesn't so we create it");
    } else {
      console.log("It exists.");
    }
  });
};


/**
 * Get the event relative to that person
 * Event
 * ' /event/eventPerson/(Id_person)
 * id_person Integer person that is the contact for that event
 * returns Event
 **/
 exports.eventEventPersonId_personGET = function(id_person) {
  return sqlDb("Event").join("Contact for", function(){
    this.on("Event.Id_event", "=" ,"Contact for.Id_event")
  }).where({ Id_person : id_person}).then(data => {
    return data;
  });
}


/**
 * Get the event relative to the service
 * Event
 * ' /event/eventService/(Id_service)
 * id_service Integer service that the event present
 * returns Event
 **/
exports.eventEventServiceId_serviceGET = function(id_service) {
  return sqlDb("Event").join("Service", function(){
    this.on("Event.Id_event", "=" ,"Service.Id_event")
  }).where({ Id_service : id_service}).then(data => {
    return data;
  });
}


/**
 * Get an event by ID
 * Event
 * ' /event/(Id_event)
 * id_event Integer Event id
 * returns Event
 **/
exports.eventId_eventGET = function(id_event) {
  return sqlDb("Event").where({ Id_event : id_event}).then(data => {
    return data;
  });
}




/**
 * Gets a list of event by month
 * The event of the specified month
 * ' /events/(month)
 * month Integer month of this event
 * returns List
 **/
 exports.eventsMonthGET = function(month) {
  return sqlDb("Event").whereRaw({"EXTRACT(MONTH FROM Event.Date::date) = ?" : month}).then(data => {
        return data;
  });
}
/**
 * Get the event relative to that person
 * Event
 *
 * id_person Integer person that is the contact for that event
 * returns Event
 **/
/*exports.eventEventPersonId_personGET = function(id_person) {
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
}*/


/**
 * Get the event relative to the service
 * Event
 *
 * id_service Integer service that the event present
 * returns Event
 **/
/*exports.eventEventServiceId_serviceGET = function(id_service) {
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
}*/


/**
 * Get an event by ID
 * Event
 *
 * id_event Integer Event id
 * returns Event
 **/
/*exports.eventId_eventGET = function(id_event) {
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
}*/


/**
 * Gets a list of event by month
 * The event of the specified month
 *
 * month Integer month of this event
 * returns List
 **/
/*exports.eventsMonthGET = function(month) {
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
}*/
