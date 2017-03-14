const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let PeopleSchema = new mongoose.Schema({
    name: {
        type: String,
        required : [true, 'Please enter a name'],
    }
});
let People = mongoose.model('People', PeopleSchema);