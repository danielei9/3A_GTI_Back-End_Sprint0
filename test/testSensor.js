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

describe('Sensors', () => {
    //------------------------------------------------------------------------
    it("probar POST /sensors", function (hecho) {

        sensor = new Sensor({ _id:"615cc85ffd8baf8a30e8694f", type: 'Test2', address: '123456789' });

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
    //------------------------------------------------------------------------
    it("probar GET /sensors", function (hecho) {

        request.get(
            {
                url: IP_PUERTO + "/sensors",
                headers: { "User-Agent": "DanielBurru", "Content-Type": "application/json" }
                // body: JSON.stringify(sensor)
            },
            function (err, respuesta, carga) {
                //console.log(JSON.parse(carga));
                assert.equal(err, null, "¿ha habido un error?");
                assert.equal(respuesta.statusCode, 200, "¿El código no es 200 (OK)");
                assert.equal(JSON.parse(carga).message, "Sensors retrieved successfully", "¿La carga no es OK");
                hecho()
            } // callback
        ) // .post
    }) // it
    //------------------------------------------------------------------------
    it("probar GET /sensor/:id", function (hecho) {
        request.get(
            {
                url: IP_PUERTO + "/sensors/615cc85ffd8baf8a30e8694f",
                headers: { "User-Agent": "DanielBurru", "Content-Type": "application/json" }
                // body: JSON.stringify(sensor)
            },
            function (err, respuesta, carga) {
                //console.log(JSON.parse(carga));
                assert.equal(err, null, "¿ha habido un error?");
                assert.equal(respuesta.statusCode, 200, "¿El código no es 200 (OK)");
                assert.equal(JSON.parse(carga).message, "Sensor details loading..", "¿La carga no es OK");
                hecho()
            } // callback
        ) // .post
    }) // it
    //------------------------------------------------------------------------
    it("probar PATCH /sensor/:id", function (hecho) {
        sensor = new Sensor({ type: 'TESTOK', address: 'TESTOK' });

        request.patch(
            {
                url: IP_PUERTO + "/sensors/615cc85ffd8baf8a30e8694f",
                headers: { "User-Agent": "DanielBurru", "Content-Type": "application/json" },
                body: JSON.stringify(sensor)
            },
            function (err, respuesta, carga) {
                request.get(
                    {
                        url: IP_PUERTO + "/sensors/615cc85ffd8baf8a30e8694f",
                        headers: { "User-Agent": "DanielBurru", "Content-Type": "application/json" }
                        // body: JSON.stringify(sensor)
                    },
                    function (er, res, crg) {
                        //console.log(JSON.parse(carga));
                        assert.equal(er, null, "¿ha habido un error?");
                        assert.equal(res.statusCode, 200, "¿El código no es 200 (OK)");
                        assert.equal(JSON.parse(carga).data.type, JSON.parse(crg).data.type, "¿La carga no es OK");
                    } // callback
                ) // .get
                assert.equal(err, null, "¿ha habido un error?");
                assert.equal(respuesta.statusCode, 200, "¿El código no es 200 (OK)");
                hecho()

            } // callback
        ) // .post
    }) // it
    //------------------------------------------------------------------------ 
    it("probar DELETE /sensor/:id", function (hecho) {
        request.delete(
            {
                url: IP_PUERTO + "/sensors/615cc85ffd8baf8a30e8694f",
                headers: { "User-Agent": "DanielBurru", "Content-Type": "application/json" }
                // body: JSON.stringify(sensor)
            },
            function (err, respuesta, carga) {
                //console.log(JSON.parse(carga));
                assert.equal(err, null, "¿ha habido un error?");
                assert.equal(respuesta.statusCode, 200, "¿El código no es 200 (OK)");
                assert.equal(JSON.parse(carga).status, "success", "¿La carga no es OK");
               //console.log(JSON.parse(carga))
                hecho()
            } // callback
        ) // .post
    }) // it     
}) // describe
//123456789

