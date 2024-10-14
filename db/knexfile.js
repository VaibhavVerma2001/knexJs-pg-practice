module.exports = {
  development: {
    client: "pg",
    connection: "postgresql://Practice%20DB_owner:bngO0GJuz1ML@ep-ancient-queen-a5rqsl4r.us-east-2.aws.neon.tech/Practice%20DB?sslmode=require",
    migrations: {
      directory: './migrations',
    },
  },
};