Measure = require('../Models/measureModel');

class MeasuresLogic {
    constructor(m) {
        this.m = m;
    }

    getAllMeasures() {
        let measure = new Measure();
        measure.get(function (err, measures) {
            if (err) {
                res.json({
                    status: "error",
                    message: err,
                });
                return err;
            }
            console.log(measures)
            return measures;
        });
    }
    createMeasure(){
    let measure = this.m;
    // save the sensor and check for errors
    measure.save(function (err) {
        // Check for validation error
        if (err) {
            res.json(err);
            console.log(err);
            return(err)
        }
        else {
            console.log(measure)
           return(measure)
        }
    });
    }


}