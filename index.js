//this is the start script
require('./routes.js');//load routes
//error handling
process.on('unhandledRejection', (err) => {
    console.log("UNHANDLED REJECTION AT " + err.stack);
});
process.on('uncaughtException', (err) => console.log("UNHANDLED EXCEPTION AT " + err.stack));