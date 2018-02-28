const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create geolocation schema
const Geoschema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
});
// create monbster schema & model
const mobsterSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name field is required'],
    },
    rank: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    },
    geometry: Geoschema
});

const Mobster = mongoose.model('mobster', mobsterSchema); 

module.exports = Mobster;