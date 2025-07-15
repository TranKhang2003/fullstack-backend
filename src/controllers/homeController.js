const connection = require('../config/database')

const getHomepage = (req, res) => {
    let users = [];
    connection.query(
        'select * from Users',
        function (err, results, fields) {
            users = results
            res.send(JSON.stringify(users))
        }
    );
}

const getABC = (req, res) => {
    res.send("check ABC")
}

const getHoiDanIT = (req, res) => {
    res.render('sample.ejs');
}

module.exports = {
    getHomepage, getABC, getHoiDanIT
}