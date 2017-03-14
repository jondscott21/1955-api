const mongoose = require('mongoose');
let peoples = require('../controllers/peoples');
module.exports = function (app) {
    app.get('/', function (req, res) {
        peoples.show(req, res);
    });
    app.get('/new/:name/', function (req, res) {
        peoples.create(req, res);
    });
    app.get('/remove/:name/', function (req, res) {
        peoples.destroyPerson(req, res);
    });
    app.get('/:name', function (req, res) {
        peoples.findPerson(req, res);
    });
};