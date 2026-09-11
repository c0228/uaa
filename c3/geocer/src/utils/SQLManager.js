import mysql from "mysql2/promise";

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "geocer",

    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export const InsertData = async (query) => {
    const [result] = await pool.query(query);
    return `query: ${query}; affectedRows: ${result?.affectedRows}`;
};

/*
export const InsertData = async(query)=>{
    let logData = '';
    let connection = null;
    try {
        connection = await mysql.createConnection({ host: "localhost", user: "root", password: "", database: "geocer" });
        const [result] = await connection.query(query);
        logData = "query: "+query+"; affectedRows: "+result?.affectedRows;
    } finally {
        await connection?.end();
    }
    return logData;
}; */

// InsertData("INSERT INTO test(col1, col2) VALUES (103,'Hundred Three')");