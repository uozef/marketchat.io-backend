// dbService.js
const db = require('./../utils/db');
async function runQuery(query, params) {
  try {
    const results = await db.query(query, params);
    return results;
  } catch (err) {
    console.error('Error executing MySQL query:', err);
    throw err;
  }
}
module.exports = { runQuery };
