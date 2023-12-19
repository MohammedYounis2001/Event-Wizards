const { Pool } = require("pg");
const Knex = require("knex");

const pool = new Pool({
  user: "postgres",
  host: "127.0.0.1",
  database: "EventWizards",
  password: "123456",
  port: 5432,
});

const knex = Knex({
  client: "pg",
  connection: {
    user: "postgres",
    host: "127.0.0.1",
    database: "EventWizards",
    password: "123456",
    port: 5432,
  },
});

module.exports = {
  pool,
  knex,
};
