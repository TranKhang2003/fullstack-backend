const connection = require('../config/database');

const getAllUser = async () => {
    let [results, fields] = await connection.query('select * from Users');
    return results
}

const getUserById = async (id) => {
    let [results, fields] = await connection.query('select * from Users where id = ?', [id]);
    let user = results && results.length > 0 ? results[0] : {};
    return user;
}



const deleteUserById = async (id) => {
    let [results, fields] = await connection.query(
        `DELETE FROM Users
        WHERE id = ?`
        , [id],
    );
}

module.exports = {
    getAllUser, getUserById, deleteUserById,
}