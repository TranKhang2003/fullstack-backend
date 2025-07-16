const connection = require('../config/database')

const getHomepage = (req, res) => {
    return res.render('home.ejs')
}

const getABC = (req, res) => {
    res.send("check ABC")
}

const getHoiDanIT = (req, res) => {
    res.render('sample.ejs');
}

const postCreateUser = async (req, res) => {
    let { email, myname, city } = req.body;
    // connection.query(
    //     'INSERT INTO Users (email, name, city) VALUES (?,?,?)',
    //     [email, myname, city],                       // mảng giá trị tương ứng
    //     (err, results) => {
    //         if (err) {
    //             console.error('Insert error:', err);     // xem lỗi chi tiết
    //             return res.status(500).send('Lỗi khi thêm user');
    //         }
    //         console.log('>>> results:', results);      // OK
    //         res.send('Create user succeed');
    //     }
    // );
    // res.send('Create user succeed')
    let [results, fields] = await connection.query(
        'INSERT INTO Users (email, name, city) VALUES (?,?,?)',[email, myname, city],
    );
    console.log('>>> check user: ', results);
    res.send('Create user succeed');
}

const getCreatePage = (req, res) => {
    return res.render('create.ejs')
}

module.exports = {
    getHomepage, getABC, getHoiDanIT,
    postCreateUser, getCreatePage
}