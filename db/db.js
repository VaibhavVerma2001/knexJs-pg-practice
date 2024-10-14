const knex = require('knex');
const knexFile = require('./knexfile');

const db = knex(knexFile.development);

const raw = async (query) => {
    const data = await db.raw(query);
    // console.log({data : data.rows, rowCount : data.rowCount});
    return data.rows;
};


module.exports = {
    db,
    raw
};