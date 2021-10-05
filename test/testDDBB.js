/* ----------------------------------------------------------------
 *   AUTHOR:        Daniel Burruchaga Sola 
 *   FILE:           testDDBB.js
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
        mongoose.connection.collections.sensors.find(() => {
            //this function runs after the drop is completed
            done(); //go ahead everything is done now.
        });
    });
});
