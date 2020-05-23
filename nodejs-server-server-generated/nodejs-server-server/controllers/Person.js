'use strict';

var utils = require('../utils/writer.js');
var Person = require('../service/PersonService');

module.exports.peopleGET = function peopleGET (req, res, next) {
  Person.peopleGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.peopleId_personGET = function peopleId_personGET (req, res, next) {
  var id_person = req.swagger.params['Id_person'].value;
  Person.peopleId_personGET(id_person)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.peoplePeopleserviceId_serviceGET = function peoplePeopleserviceId_serviceGET (req, res, next) {
  var id_service = req.swagger.params['Id_service'].value;
  Person.peoplePeopleserviceId_serviceGET(id_service)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.personId_eventGET = function personId_eventGET (req, res, next) {
  var id_event = req.swagger.params['Id_event'].value;
  Person.personId_eventGET(id_event)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
