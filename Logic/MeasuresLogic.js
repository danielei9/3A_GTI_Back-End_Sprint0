Measure = require('../Models/measureModel');

class MeasuresLogic {
    constructor(measure) {
        this.measure = measure;
    }
    async getAllMeasures(hecho) {
        //let measure = new Measure();
        Measure.get(function (err, measures) {
            if (err) {
                res.json({
                    status: "error",
                    message: err,
                });
                return err;
            }
            //console.log(measures)
            return (hecho(measures));
        });
    }
    async createMeasure(hecho) {
        // save the sensor and check for errors
       let m = new Measure;
       m.save(function (err,m) {
            // Check for validation error
            if (err) {
                console.log(err);
                return (err)
            }
            else {
               // console.log(m)
                return (hecho)
            }
        });
    }


}
module.exports = MeasuresLogic