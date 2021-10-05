/* ----------------------------------------------------------------
 *   AUTHOR:        Daniel Burruchaga Sola 
 *   FILE:           test.js
 *   DATE:           20/06/2021
 *   STATE:          DONE
 *  ---------------------------------------------------------------- */
const mongoose = require('mongoose');
const IP_PUERTO = "http://localhost:8080/api";
var request = require("request");

//Importing sensor
const Sensor = require('../Models/sensorModel');
const assert = require('assert');

var sensorController = require('../Controllers/sensorController');
var measureController = require('../Controllers/measureController');

//tell mongoose to use es6 implementation of promises
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Proyect3A');
mongoose.connection
    .once('open', () => console.log('Connected!'))
    .on('error', (error) => {
        console.warn('Error : ', error);
    });


describe('Connecting to DDBB', () => {
    it('Connect?', (done) => {
        //Called hooks which runs before something.
        mongoose.connection.collections.sensors.drop(() => {
            //this function runs after the drop is completed
            done(); //go ahead everything is done now.
        });
    });
});

describe('Sensors', () => {
    it("probar POST /sensors", function (hecho) {

        sensor = new Sensor({ type: 'Test', address: '123456789' });

        request.post(
            {
                url: IP_PUERTO + "/sensors",
                headers: { "User-Agent": "DanielBurru", "Content-Type": "application/json" },
                body: JSON.stringify(sensor)
            },
            function (err, respuesta, carga) {
                assert.equal(err, null, "¿ha habido un error?");
                assert.equal(respuesta.statusCode, 200, "¿El código no es 200 (OK)");
                assert.equal(JSON.parse(carga).message, "New sensor created!", "¿La carga no es OK");
                hecho()
            } // callback
        ) // .post
    }) // it

})



