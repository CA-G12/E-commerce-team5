require('dotenv').config();
const { Pool } = require('pg');

const { NODE_ENV, DATABASE_URL, DEVELOPMENT_DATABASE_URL } = process.env;

let connectionString = '';
let ssl = false;

switch (NODE_ENV) {
  case 'production':
    connectionString = DATABASE_URL;
    ssl = { rejectUnauthorized: false };
    break;
  case 'development':
    connectionString = DEVELOPMENT_DATABASE_URL;
    break;
  default:
    throw new Error('Invalid database url');
}
const connection = new Pool({
  connectionString,
  ssl,
});
module.exports = connection;
