// src/server.js
require('dotenv').config();
const express = require('express');
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');   // path adjusted

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME || 'localhost';

// view engine
configViewEngine(app);

// routes
app.use('/', webRoutes);

// static files (optional)
// app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, hostname, () => {
    console.log(`✔ Server running at http://${hostname}:${port}`);
});
