const connection = require('../config/database');
const {getAllUser, getUserById, deleteUserById} = require('../services/CRUDService');

const getHomepage = async (req, res) => {
    let results = await getAllUser()
    return res.render('home.ejs', { listUsers: results })
}

const getABC = (req, res) => {
    res.send("check ABC")
}

const getHoiDanIT = (req, res) => {
    res.render('sample.ejs');
}

const postCreateUser = async (req, res) => {
    let { email, myname, city } = req.body;
    let [results, fields] = await connection.query(
        'INSERT INTO Users (email, name, city) VALUES (?,?,?)',[email, myname, city],
    );
    // res.send('Create user succeed');
    res.redirect('/')
}

const getCreatePage = (req, res) => {
    return res.render('create.ejs')
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id
    let user = await getUserById(userId)
    return res.render('edit.ejs', { userEdit: user })
}

const postUpdateUser = async (req, res) => {
    let { email, myname, city, id } = req.body;
    let [results, fields] = await connection.query(
        `UPDATE Users
        SET email = ?,name = ?, city = ?
        WHERE id = ?`
        , [email, myname, city, id],
    );
    res.redirect('/')
}

const postDeleteUser = async (req, res) => {
    let userId = req.params.id
    let user = await getUserById(userId)
    res.render('delete.ejs', { userEdit: user})
}

const postHandleRemoveUser = async (req, res) => {
    let userId = req.body.id
    await deleteUserById(userId)
    res.redirect('/')
}

module.exports = {
    getHomepage, getABC, getHoiDanIT,
    postCreateUser, getCreatePage, getUpdatePage,
    postUpdateUser, postDeleteUser, postHandleRemoveUser
}