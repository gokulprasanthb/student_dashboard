const sql = require('mssql')

const dbConfig = {
    user : "sa",
    password : "user",
    database : "PIC",
    server : "LAPTOP-S81EMQOT\\SQLEXPRESS",
    port : 1433, 
    options : {
        trustServerCertificate : true
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