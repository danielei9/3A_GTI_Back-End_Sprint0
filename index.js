/* ---------------------------------------------------------------- 
 *   AUTHOR:        Daniel Burruchaga Sola 
 *   FILE:           index.js
 *   DATE:           20/09/2021
 *   STATE:          DONE
 *
 *  ---------------------------------------------------------------- */
// javadoc  -e "**/node_modules/**" "**ignore**" -f json -o README.md*
/**
 * Index.js, contains all what you need to start the **server express**.
 * 
 * @express Librarie which control the express server
 * @bodyParser Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
 * @cors CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
 * @morgan Create a new morgan logger middleware function using the given format and options. 
 * The format argument may be a string of a predefined name (see below for the names), 
 * a string of a format string, or a function that will produce a log entry.
 * @mongoose Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. 
 * Mongoose supports both promises and callbacks.
 * @app Variable which controll the express server
 * @bdUrl BBDD url
 * @port server port
 */
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
    useFindAndModify: false, // TODO:checkThis
  })
  .then(() => {
    console.log("Database connection established");
  })
  .catch((err) => {
    console.error(`ERROR: ${err}`);
  });

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
