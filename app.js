// import module Start
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./src/routes/api');
require('dotenv').config();
// import module End

// basic function start
empty = function empty(obj) {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}
// basic function end

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
// routes
app.use('/api/v1/',userRoutes);



module.exports = app;
