  
/* ----------------------------------------------------------------
 *   AUTHOR:        Daniel Burruchaga Sola 
 *   FILE:           sensorModel.js
 *   DATE:           16/09/2021
 *   STATE:          DONE
 *  ---------------------------------------------------------------- */
// sensorModel.js
var mongoose = require('mongoose');
//schema
var sensorSchema = mongoose.Schema({
    createDate: { type: Date, default: Date.now },
     activeDate: Date,
     address: String,
     type: String
});
//export
var Sensor = module.exports = mongoose.model('sensor', sensorSchema);
module.exports.get = function (callback, limit) {
    Sensor.find(callback).limit(limit);
}
module.exports.findById = function (callback, limit) {
    Sensor.find(callback).limit(limit);
}