/* ----------------------------------------------------------------
 *   AUTHOR:        Daniel Burruchaga Sola 
 *   FILE:           measureController.js
 *   DATE:           16/09/2021
 *   STATE:          DONE
 *  ---------------------------------------------------------------- */
Measure = require('../Models/measureModel');
//----------------------------------------------------------------
// Handle actions
//----------------------------------------------------------------
/* ----------------------------------------------------------------
 *  -> index -> {Measure:JSON, Measure:JSON ...}
 *  ---------------------------------------------------------------- */
exports.index = function (req, res) {
    Measure.get(function (err, measures) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        console.log(measures)
        res.json({
            status: "success",
            message: "Measure retrieved successfully",
            data: measures
        });
    });
};
/* ----------------------------------------------------------------
            Handle create sensor actions
 *  value:String, address:String -> new -> {{Sensor:Json} , message:String} : JSON
 *  ---------------------------------------------------------------- */
exports.new = function (req, res) {
    var measure = new Measure();
    //sensor.createDate = Date.now;
    console.log("CreatingMeasure");
    //  sensor.activeDate = Date;
    measure.value = req.body.value;
    measure.address = req.body.address;
    // save the sensor and check for errors
    measure.save(function (err) {
        // Check for validation error
        if (err) {
            res.json(err);
            console.log(err);
        }
        else{
        console.log(measure)
            res.json({
                message: 'New measure created!',
                data: measure
            });
        }
    });
};
/* ----------------------------------------------------------------
            Handle view measure info
 *  id:String -> view -> {{Sensor:Json} , message:String} : JSON
 *  ---------------------------------------------------------------- */
exports.view = function (req, res) {
    console.log(req.params)
    Measure.findById(req.params.measure_id, function (err, measure) {
        if (err)
            res.send(err);
        console.log(measure);
        res.json({
            message: 'Sensor details loading..',
            data: measure
        });
    });
};

/* ----------------------------------------------------------------
            Handle update measure info
 *  id:String,  value:String, address:String -> update -> {{Measure:Json} , message:String} : JSON
 *  ---------------------------------------------------------------- */
exports.update = function (req, res) {
    Measure.findById(req.params.measure_id, function (err, measure) {
        if (err)
            res.send(err);
        measure.value = req.body.value;
        measure.address = req.body.address;
        // save the sensor and check for errors
        measure.save(function (err) {
            if (err)
                res.json(err);
            console.log(measure);
            res.json({
                message: 'Measure Info updated',
                data: measure
            });
        });
    });
};
/* ----------------------------------------------------------------
 *          Handle delete measure
 *  id:String -> delete -> {status:String , message:String} : JSON
 *  ---------------------------------------------------------------- */
exports.delete = function (req, res) {
    Sensor.remove({
        _id: req.params.measure_id
    }, function (err, measure) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Measure deleted'
        });
    });
};