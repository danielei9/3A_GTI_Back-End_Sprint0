/* ----------------------------------------------------------------
 *   AUTHOR:        Daniel Burruchaga Sola 
 *   FILE:           index.js
 *   DATE:           20/09/2021
 *   STATE:          DONE
 *  ---------------------------------------------------------------- */
// Import express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import CORS
let cors = require('cors');
var morgan = require('morgan')
// Import Mongoose
let mongoose = require('mongoose');
// Initialize the app
let app = express();
app.use(cors());
app.use(morgan("tiny"));

// Import routes
let apiRoutes = require("./api-routes");
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
//----------------------------------------------------------------------------------
//------------------------------ BD ------------------------------------------------
// Connect to Mongoose and set connection variable
let bdUrl = 'mongodb://localhost/Proyect3A';
mongoose
  .connect(bdUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false, // comprobar esto
  })
  .then(() => {
    console.log("Database connection established");
  })
  .catch((err) => {
    console.error(`ERROR: ${err}`);
  });
// Heroku Mongoose connection
// mongoose.connect('mongodb://heroku_5686p02g:sia8asdni4jmu7qbn0ac1t75mf@ds349857.mlab.com:49857/heroku_5686p02g', { useNewUrlParser: true });

var db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")
//---------------------------Setup server port---------------------------------------------
// ----------------------------------------------------------------------------------------
var port = process.env.PORT || 8080;

// Send message for default URL
app.get('/', (req, res) => res.send('OK'));
// Use Api routes in the App
app.use('/api', apiRoutes);
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running BuchuApiRest on PORT " + port);
});

module.exports = app;
