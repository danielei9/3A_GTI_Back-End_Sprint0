
/* ----------------------------------------------------------------
 *   AUTHOR:        Daniel Burruchaga Sola 
 *   FILE:           measureModel.js
 *   DATE:           16/09/2021
 *   STATE:          DONE
 *  ---------------------------------------------------------------- */
// sensorModel.js
var mongoose = require('mongoose');
//schema
var measureSchema = mongoose.Schema({
    createDate: { type: Date, default: Date.now },
    value: Number,
    address: String
});
//export
var Measure = module.exports = mongoose.model('measure', measureSchema);
module.exports.get = function (callback, limit) {
    Measure.find(callback).limit(limit);
}
module.exports.findById = function (callback, limit) {
    Measure.find(callback).limit(limit);
}