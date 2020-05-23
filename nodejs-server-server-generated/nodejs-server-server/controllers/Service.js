'use strict';

var utils = require('../utils/writer.js');
var Service = require('../service/ServiceService');

module.exports.servicesGET = function servicesGET (req, res, next) {
  Service.servicesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.servicesId_serviceGET = function servicesId_serviceGET (req, res, next) {
  var id_service = req.swagger.params['Id_service'].value;
  Service.servicesId_serviceGET(id_service)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.servicesServicesEventId_eventGET = function servicesServicesEventId_eventGET (req, res, next) {
  var id_event = req.swagger.params['Id_event'].value;
  Service.servicesServicesEventId_eventGET(id_event)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.servicesServicesPersonId_personGET = function servicesServicesPersonId_personGET (req, res, next) {
  var id_person = req.swagger.params['Id_person'].value;
  Service.servicesServicesPersonId_personGET(id_person)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
