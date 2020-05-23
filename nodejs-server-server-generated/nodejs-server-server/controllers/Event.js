'use strict';

var utils = require('../utils/writer.js');
var Event = require('../service/EventService');

module.exports.eventEventPersonId_personGET = function eventEventPersonId_personGET (req, res, next) {
  var id_person = req.swagger.params['Id_person'].value;
  Event.eventEventPersonId_personGET(id_person)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventEventServiceId_serviceGET = function eventEventServiceId_serviceGET (req, res, next) {
  var id_service = req.swagger.params['Id_service'].value;
  Event.eventEventServiceId_serviceGET(id_service)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventId_eventGET = function eventId_eventGET (req, res, next) {
  var id_event = req.swagger.params['Id_event'].value;
  Event.eventId_eventGET(id_event)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsMonthGET = function eventsMonthGET (req, res, next) {
  var month = req.swagger.params['month'].value;
  Event.eventsMonthGET(month)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
