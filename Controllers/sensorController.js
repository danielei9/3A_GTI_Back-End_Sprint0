/* ----------------------------------------------------------------
 *   AUTHOR:        Daniel Burruchaga Sola 
 *   FILE:           sensorModel.js
 *   DATE:           16/09/2021
 *   STATE:          DONE
 *  ---------------------------------------------------------------- */

Sensor = require('../Models/sensorModel');
/* ----------------------------------------------------------------
 *                         Handle actions
 *  -> index -> {Sensor1:JSON, Sensor2:JSON ...}
 *  ---------------------------------------------------------------- */
exports.index = function (req, res) {
    Sensor.get(function (err, sensors) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Sensors retrieved successfully",
            data: sensors
        });
    });
};
/* ----------------------------------------------------------------
            Handle create sensor actions
 *  type:String, address:String -> new -> {{Sensor:Json} , message:String} : JSON
 *  ---------------------------------------------------------------- */
exports.new = function (req, res) {
    var sensor = new Sensor();
    //sensor.createDate = Date.now;
    console.log("CreatingSensor");
    //  sensor.activeDate = Date;
    sensor.type = req.body.type;
    sensor.address = req.body.address;
    // save the sensor and check for errors
    sensor.save(function (err) {
        // Check for validation error
        if (err) {
            res.json(err);
            console.log(err);
        }
        else {
            console.log(sensor);
            res.json({
                message: 'New sensor created!',
                data: sensor
            });
        }
    });
};
/* ----------------------------------------------------------------
            Handle view sensor info
 *  id:String -> view -> {{Sensor:Json} , message:String} : JSON
 *  ---------------------------------------------------------------- */
exports.view = function (req, res) {
    console.log(req.params)
    Sensor.findById(req.params.sensor_id, function (err, sensor) {
        if (err)
            res.send(err);
        else {
            console.log(sensor)
            res.json({
                message: 'Sensor details loading..',
                data: sensor
            });
        }
    });
};
/* ----------------------------------------------------------------
            Handle update sensor info
 *  id:String,  type:String, address:String -> update -> {{Sensor:Json} , message:String} : JSON
 *  ---------------------------------------------------------------- */
exports.update = function (req, res) {
    Sensor.findById(req.params.sensor_id, function (err, sensor) {
        if (err)
            res.send(err);
        sensor.activeDate = req.body.ActiveDate;
        sensor.type = req.body.type;
        sensor.address = req.body.address;
        // save the sensor and check for errors
        sensor.save(function (err) {
            if (err)
                res.json(err);
            else {
                console.log(sensor)
                res.json({
                    message: 'Sensor Info updated',
                    data: sensor
                });
            }
        });
    });
};
/* ----------------------------------------------------------------
            Handle delete sensor
 *  id:String -> delete -> {status:String , message:String} : JSON
 *  ---------------------------------------------------------------- */
exports.delete = function (req, res) {
    Sensor.remove({
        _id: req.params.address
    }, function (err, sensor) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Sensor deleted'
        });
    });
};