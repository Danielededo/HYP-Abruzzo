'use strict';
let sqlDb;


exports.peopleDbSetup = function(s) {
  sqlDb = s;
  console.log("Checking if Person table exists");
  return sqlDb.schema.hasTable("Person").then(exists => {
    if (!exists) {
      console.log("It doesn't so we create it");
    } else {
      console.log("It exists.");
    }
  });
};

/**
 * Get all the person in the database
 * List of person
 *
 * ' /v2/people
 *
 * returns List
 **/
exports.peopleGET = function() {
  return sqlDb("Person")
  .then(data => {
    return data.map(e => {
      Id_person: e.Id_person;
      Name: e.Name;
      Description: e.Description;
      Image: e.Image;
      return e;
    });
  });
};

/**
 * Get a person by ID
 * Person
 *
 * ' /v2/people/(Id_person)
 *
 * id_person Integer Person id
 * returns Person
 **/
exports.peopleId_personGET = function(id_person) {
  return sqlDb("Person").where({ Id_person : id_person}).then(data => {
    return data;
  });
}


/**
 * Get the people associated to that service
 * Person
 *
 * ' /v2/people/peopleservice/(Id_service)
 *
 * id_service Integer id of the service associated to that person
 * returns List
 **/
exports.peoplePeopleserviceId_serviceGET = function(id_service) {
  return sqlDb("Person").join("Is involved in", "Person.Id_person", "=", "Is involved in.Id_person").where({ Id_service : id_service}).then(data =>{
    return data;
  });
}


/**
 * Get the person associated to that event
 * Person
 *
 * ' /v2/person/(Id_event)
 *
 * id_event Integer id of the event associated to that person
 * returns Person
 **/
exports.personId_eventGET = function(id_event) {
  return sqlDb("Person").join("Contact for", "Person.Id_person", "=", "Contact for.Id_person").where({ Id_event : id_event}).then(data =>{
    return data;
  });
}
