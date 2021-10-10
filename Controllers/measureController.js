/* ----------------------------------------------------------------
 *   AUTHOR:        Daniel Burruchaga Sola 
 *   FILE:           measureController.js
 *   DATE:           16/09/2021
 *   STATE:          DONE
 *  ---------------------------------------------------------------- */
MeasuresLogic = require("../Logic/MeasuresLogic"); // Ruta correcta al archivo Js
Measure = require('../Models/measureModel');

//----------------------------------------------------------------
// Handle actions
//----------------------------------------------------------------
/* ----------------------------------------------------------------
 *  -> index -> {Measure:JSON, Measure:JSON ...}
 *  ---------------------------------------------------------------- */
exports.index = async function (req, res) {
    let ML = new MeasuresLogic();
    ML.getAllMeasures(function (measures) {
        //console.log(measures)
        res.json({
            status: "success",
            message: "Measure retrieved successfully",
            data: measures
        })
    });


};
/* ----------------------------------------------------------------
            Handle create sensor actions
 *  value:String, address:String -> new -> {{Sensor:Json} , message:String} : JSON
 *  ---------------------------------------------------------------- */
exports.new = function (req, res) {
    let measure = new Measure();
    measure.value = req.body.value;
    measure.address = req.body.address;
    let ML = new MeasuresLogic(measure);
    ML.createMeasure(measure).then(function () {
        res.json({
            status: "success",
            message: "Measure retrieved successfully",
            data: measure
        });
    })


};
/* ----------------------------------------------------------------
            Handle view measure info
 *  id:String -> view -> {{Sensor:Json} , message:String} : JSON
 *  ---------------------------------------------------------------- */
exports.view = function (req, res) {
    let id = req.params.measure_id
    let ML = new MeasuresLogic();
    ML.getMeasure(id, function (m) {
        res.json({
            status: "success",
            message: "Measure retrieved successfully",
            data: m
        });
    })

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
        // save the measure and check errors
        measure.save(function (err) {
            if (err)
                res.json(err);
            //console.log(measure);
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

