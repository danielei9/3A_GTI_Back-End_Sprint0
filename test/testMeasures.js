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
const Measures = require('../Models/measureModel');
const assert = require('assert');

describe('Measures', () => {
    //------------------------------------------------------------------------
    it("probar POST /measures", function (hecho) {

        measure = new Measures({ _id: "615cd1b595f7e84958a9cb41", type: 'Test2', address: '123456789',value:10 });

        request.post(
            {
                url: IP_PUERTO + "/measures",
                headers: { "User-Agent": "DanielBurru", "Content-Type": "application/json" },
                body: JSON.stringify(measure)
            },
            function (err, respuesta, carga) {
                //console.log(JSON.parse(carga));
                assert.equal(err, null, "¿ha habido un error?");
                assert.equal(respuesta.statusCode, 200, "¿El código no es 200 (OK)");
                assert.equal(JSON.parse(carga).message, "New measure created!", "¿La carga no es OK");
               // assert.equal(JSON.parse(carga).message, measure, "¿La carga no es OK");
                hecho()
            } // callback
        ) // .post
    }) // it
    //------------------------------------------------------------------------
    it("probar GET /measures", function (hecho) {

        request.get(
            {
                url: IP_PUERTO + "/measures",
                headers: { "User-Agent": "DanielBurru", "Content-Type": "application/json" }
                // body: JSON.stringify(sensor)
            },
            function (err, respuesta, carga) {
               // console.log(JSON.parse(carga));
                assert.equal(err, null, "¿ha habido un error?");
                assert.equal(respuesta.statusCode, 200, "¿El código no es 200 (OK)");
                assert.equal(JSON.parse(carga).status, "success", "¿La carga no es OK");
                hecho()
            } // callback
        ) // .post
    }) // it
    //------------------------------------------------------------------------
    it("probar GET /measures/:id", function (hecho) {
        request.get(
            {
                url: IP_PUERTO + "/measures/615cd1b595f7e84958a9cb41",
                headers: { "User-Agent": "DanielBurru", "Content-Type": "application/json" }
                // body: JSON.stringify(sensor)
            },
            function (err, respuesta, carga) {
                //console.log(JSON.parse(carga));
                assert.equal(err, null, "¿ha habido un error?");
                assert.equal(respuesta.statusCode, 200, "¿El código no es 200 (OK)");
                assert.equal(JSON.parse(carga).message, "Measure details loading..", "¿La carga no es OK");
                hecho()
            } // callback
        ) // .post
    }) // it
    //------------------------------------------------------------------------
    it("probar PATCH /measures/:id", function (hecho) {
        sensor = new Sensor({ type: 'TESTOK', address: 'TESTOK'});

        request.patch(
            {
                url: IP_PUERTO + "/measures/615cd1b595f7e84958a9cb41",
                headers: { "User-Agent": "DanielBurru", "Content-Type": "application/json" },
                body: JSON.stringify(sensor)
            },
            function (err, respuesta, carga) {
                request.get(
                    {
                        url: IP_PUERTO + "/measures/615cd1b595f7e84958a9cb41",
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
    it("probar DELETE /measures/:id", function (hecho) {
        request.delete(
            {
                url: IP_PUERTO + "/measures/615cd1b595f7e84958a9cb41",
                headers: { "User-Agent": "DanielBurru", "Content-Type": "application/json" }
                // body: JSON.stringify(sensor)
            },
            function (err, respuesta, carga) {
                //console.log(JSON.parse(carga));
                assert.equal(err, null, "¿ha habido un error?");
                assert.equal(respuesta.statusCode, 200, "¿El código no es 200 (OK)");
                assert.equal(JSON.parse(carga).status, "success", "¿La carga no es OK");
                hecho()
            } // callback
        ) // .post
    }) // it     
}) // describe
//123456789

