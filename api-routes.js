/* ----------------------------------------------------------------
 *   AUTHOR:        Daniel Burruchaga Sola 
 *   FILE:           api-routes.js
 *   DATE:           20/09/2021
 *   STATE:          DONE
 *  ---------------------------------------------------------------- */
/**
 * api-routers.js, contains all the routes defined for the API-REST.
 * 
 * **sensors**
 * @sensors get -> get all sensors from DB
 * **sensors** post -> create a new sensor in DB
 * **sensors:ID** view -> get a especific sensor from DB
 * **sensors:ID** patch -> update a especific sensor from DB
 * **sensors:ID** delete -> delete a especific sensor from DB
 * 
 * 
 * 
 */
// Initialize express router
let router = require('express').Router();
//----------------------------------------------------------------
//----------------------------------------------------------------
// Set default API response   /api/...
//----------------------------------------------------------------
//----------------------------------------------------------------
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to BuchuApiRest 1.0',
    });
});
// Import contact controller
var sensorController = require('./Controllers/sensorController');
var measureController = require('./Controllers/measureController');
//----------------------------------------------------------------
//----------------------------------------------------------------
// Sensor routes /api/sensors
//----------------------------------------------------------------
//----------------------------------------------------------------
router.route('/sensors')
    .get(sensorController.index)
    .post(sensorController.new);

router.route('/sensors/:sensor_id')
    .get(sensorController.view)
    .patch(sensorController.update) 
    .delete(sensorController.delete);
//----------------------------------------------------------------
//----------------------------------------------------------------
// Measure routes /api/measures
//----------------------------------------------------------------
//----------------------------------------------------------------
router.route('/measures')
    .get(measureController.index)
    .post(measureController.new);

router.route('/measures/:measure_id')
    .get(measureController.view)
    .patch(measureController.update)
    .delete(measureController.delete);
//----------------------------------------------------------------

// Export API routes
module.exports = router;