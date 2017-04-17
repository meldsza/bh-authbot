const express = require('express');
const bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.json())

var listener = app.listen(process.env.PORT || 8080, function () {
    console.log('API now running on port: ' + listener.address().port);
});

module.exports = app;
