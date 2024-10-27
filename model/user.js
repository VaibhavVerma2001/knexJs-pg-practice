const db = require('../db/db');


// ---------------------------- NOTE ----------------------------
// use returning when we want changed row, else we will get rouCount using knex object
// if dont use returning in raw then we get [] empty array always in data.rows but get rouCount in data.rowCount


// CREATE - Insert user (using raw SQL)
const insertUserRaw = async ({name , email, role, salary}) => {
    return db.raw(`INSERT INTO employee (name, email, role, salary) VALUES ('${name}', '${email}', '${role}', ${salary}) RETURNING *`);
}

// CREATE - Insert user (using knex query builder)
const insertUser = async ({name , email, role, salary}) => {
    // return db.db("employee").insert({name : name , email : email, role : role, salary : salary}).returning("*"); // will return inserted doc
    return db.db("employee").insert({name : name , email : email, role : role, salary : salary}); // will return rowCount
}



//READ -  Get all users (using raw SQL)
const getUserRaw = async () => {
    return  db.raw("select * from employee");
}

// READ - Get all users (using knex query builder)
const getUser = async () => {
    return  db.db("employee").select("*");
}



// UPDATE - Update user by ID (using raw SQL)
const updateUserRaw = async (id, { name, email, role, salary }) => {
    return  db.raw(`UPDATE employee SET name = '${name}', email = '${email}', role = '${role}', salary = ${salary} WHERE id = ${id} RETURNING *`);
};

// UPDATE - Update user by ID (using knex query builder)
const updateUser = async ({id, body}) => {
    return db.db('employee').where({ id }).update(body).returning('*');
};



// DELETE -  Get all users (using raw SQL)
const deleteUserRawById = async ({id}) => {
    return db.raw(`DELETE FROM employee WHERE id = ${id} RETURNING *`); // returns deleted row
}

// DELETE -  Get all users (using knex query builder)
const deleteUserById = async ({id}) => {
    // return db.db("employee").where({id}).del().returning("*"); // returns deleted row
    return db.db("employee").where({id}).del(); // returns number of rows deleted
}



// INSERT MULTIPLE USERS - 
// const users = [
//     { name: 'John Doe', email: 'john@example.com', role: 'Developer', salary: 50000 },
//     { name: 'Jane Smith', email: 'jane@example.com', role: 'Designer', salary: 60000 },
//     { name: 'Mike Ross', email: 'mike@example.com', role: 'Manager', salary: 70000 }
// ];


// USING KNEX -->
// const insertMultipleUsers = async (users) => {
//     return await db('employee').insert(users).returning('*');
// };


// USING RAW -->
// const insertMultipleUsersRaw = async (users) => {
//     const values = users.map(user => `('${user.name}', '${user.email}', '${user.role}', ${user.salary})`).join(', ');
//     const query = `INSERT INTO employee (name, email, role, salary) VALUES ${values} RETURNING *`;
//     return await raw(query);
// };


// const result = await insertMultipleUsers(users);
// console.log(result);




module.exports = {
    getUserRaw,
    getUser,
    insertUserRaw,
    insertUser,
    deleteUserById,
    deleteUserRawById,
    updateUser,
    updateUserRaw
}