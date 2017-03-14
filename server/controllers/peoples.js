const mongoose = require('mongoose');
let People = mongoose.model('People');
module.exports = {
    show: function (req, res) {
        People.find({}, function (err, peoples) {
            res.json(peoples);
        })

    },
    create: function (req, res) {
        let person = new People({name: req.params.name});
        person.save(function (err) {
            if (!err) {
                res.json({person: req.params.name})
            }
            else {
                console.log("something wen wrong");
            }
        })
    },
    destroyPerson: function (req, res) {
        People.remove({name:req.params.name}, function (err, people) {
            if (!err) {
                res.json('deleted person');
            }
            else {
                res.json('failed to delete');
            }
        })
    },
    findPerson: function (req, res) {
        People.findOne({name:req.params.name}, {name:req.params.name}, function (err, person) {
            if (!err) {
                res.json(person);
            }
            else {
                res.json("didn't find them");
            }
        });
    }

};