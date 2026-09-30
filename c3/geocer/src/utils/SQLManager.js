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

export const GetData = async (query) => {
    const [rows] = await pool.query(query);
    return rows;
};