Measure = require('../Models/measureModel');

class MeasuresLogic {
    constructor(measure) {
        this.measure = measure;
    }
    async getAllMeasures(hecho) {
        //let measure = new Measure();
        Measure.get(function (err, measures) {
            if (err) {
                hecho(json({
                    status: "error",
                    message: err,
                }));
                return err;
            }
            //console.log(measures)
            return (hecho(measures));
        });
    }
    async createMeasure() {
        // save the sensor and check for errors
        let m = new Measure;
        m.save(function (err, m) {
            // Check for validation error
            if (err) {
                console.log(err);
                return (err)
            }
            else {
                console.log(m)
                return (m)
            }
        });
    }

    async getMeasure(id,hecho) {
        //console.log(id)
        Measure.find({"_id":id},function (err, measures) {
            if (err) {
                console.log(err)
                hecho({
                    status: "error",
                    message: err,
                });
            }
            //console.log(measures)
            hecho(measures);
        });
    }
}
module.exports = MeasuresLogic