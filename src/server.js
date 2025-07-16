// src/server.js
require('dotenv').config();
const express = require('express');
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');   // path adjusted
const connection = require('./config/database');
const e = require('express');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME || 'localhost';

//config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true }))

// view engine
configViewEngine(app);

// routes
app.use('/', webRoutes);



// connection.query(
//     'select * from Users',
//     function (err, results, fields){
//         console.log(">>>> results: ",results);
//     }
// );

// static files (optional)
// app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, hostname, () => {
    console.log(`✔ Server running at http://${hostname}:${port}`);
});
