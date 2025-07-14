// routes/web.js
const express = require('express');
const router = express.Router();

router.get('/', (_req, res) => {
    res.send('Hello World VI KHANG!');
});

router.get('/abc', (_req, res) => {
    res.send('Check ABC');
});

router.get('/hoidanit', (_req, res) => {
    res.render('sample.ejs');
});

module.exports = router;      // ✅ export only the router
