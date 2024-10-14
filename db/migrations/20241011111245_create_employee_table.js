exports.up = function (knex) {
    return knex.schema.createTable("employee", (table) => {
        table.increments("id").primary();
        table.string("name");
        table.string("email").notNullable();
        table.string("role");
        table.double("salary").checkPositive();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("employee");
};




