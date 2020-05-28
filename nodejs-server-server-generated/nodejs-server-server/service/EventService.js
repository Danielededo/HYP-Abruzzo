'use strict';
let sqlDb;



exports.eventsDbSetup = function(s) {
  sqlDb = s;
  console.log("Checking if Event table exists");
  return sqlDb.schema.hasTable("Event").then(exists => {
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
 *
 * ' /v2/event/eventPerson/(Id_person)
 *
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
 *
 * ' /v2/event/eventService/(Id_service)
 *
 * id_service Integer service that the event present
 * returns Event
 **/
exports.eventEventServiceId_serviceGET = function(id_service) {
  return sqlDb("Event").join("Service", function(){
    this.on("Event.Id_event", "=" ,"Service.Id_event")
  }).select("Event.Name","Event.Id_event").where({ Id_service : id_service}).then(data => {
    return data;
  });
}


/**
 * Get an event by ID
 * Event
 *
 * ' /v2/event/(Id_event)
 *
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
 *
 * ' /v2/events/(month)
 *
 * month Integer month of this event
 * returns List
 **/
 exports.eventsMonthGET = function(month) {
  return sqlDb("Event").andWhereRaw("EXTRACT(month FROM \"Date\") = " + month).orderBy('Date').then(data => {
        return data;
  });
}
