api-routers.js, contains all the routes defined for the API-REST.

**sensors**


**Sensors**:  get -> get all sensors from DB
**sensors** post -> create a new sensor in DB
**sensors:ID** view -> get a especific sensor from DB
**sensors:ID** patch -> update a especific sensor from DB
**sensors:ID** delete -> delete a especific sensor from DB





Index.js, contains all what you need to start the **server express**.



**Express**:  Librarie which control the express server


**BodyParser**:  Parse incoming request bodies in a middleware before your handlers, available under the req.body property.


**Cors**:  CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.


**Morgan**:  Create a new morgan logger middleware function using the given format and options. 
The format argument may be a string of a predefined name (see below for the names), 
a string of a format string, or a function that will produce a log entry.


**Mongoose**:  Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. 
Mongoose supports both promises and callbacks.


**App**:  Variable which controll the express server


**BdUrl**:  BBDD url


**Port**:  server port


