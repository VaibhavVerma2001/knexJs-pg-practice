In general -->
npx knex --knexfile dist/knexFiles/cmsDb.js migrate:rollback
npx knex --knexfile dist/knexFiles/make/cmsDb.js migrate:make init -x ts

In my project -->
npx knex --knexfile db/knexfile.js  migrate:make create_employee_table
npx knex --knexfile db/knexfile.js  migrate:latest



Steps - 
1-> create knexfile and configure
2 -> connect configure file (make knex object)
3 -> npx knex --knexfile db/knexfile.js  migrate:make create_employee_table
4 -> npx knex --knexfile db/knexfile.js  migrate:latest

https://chatgpt.com/share/670be00e-7d34-8012-817d-c4393e0cd04a


Ask - like insta how they store videos with less latency but in our showcase taking lot of time to load

Discuss shorturl seperation in showcase and classcam
