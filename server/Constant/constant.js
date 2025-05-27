require('dotenv').config();
const sql = require('mssql')

const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    server: process.env.DB_SERVER,
    port: parseInt(process.env.DB_PORT) || 1433,
    options: {
        trustServerCertificate: true
    }
};

async function runQuery(query){ 
    const db = await sql.connect(dbConfig);
    try {
        const response = await db.query(query);
        return response;
    } catch (error) {
        return error;
    } finally {
        db.close();
    }
}
module.exports = runQuery;