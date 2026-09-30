import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const requiredEnv = ["DB_HOST","DB_USER","DB_NAME"];

for (const key of requiredEnv) {
    if (!process.env[key]) {
        throw new Error(`Missing required environment variable: ${key}`);
    }
}

const PoolConfig = {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || 3306),

    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME,

    waitForConnections: process.env.DB_WAIT_FOR_CONNECTIONS !== "false",
    connectionLimit: Number(process.env.DB_CONNECTION_LIMIT || 10),
    queueLimit: Number(process.env.DB_QUEUE_LIMIT || 0),
    connectTimeout: Number(process.env.DB_CONNECT_TIMEOUT || 10000),
    maxIdle: Number(process.env.DB_MAX_IDLE || 10),
    idleTimeout: Number(process.env.DB_IDLE_TIMEOUT || 60000),

    enableKeepAlive: true,
    keepAliveInitialDelay: 0
};

const Pool = mysql.createPool(PoolConfig);

/**
 * Execute SELECT / SHOW / DESCRIBE / other read queries
 */
export const GetData = async (Query) => {
    try {
        const [Rows] = await Pool.query(Query);
        return Rows;
    } catch (Error) {
        console.error("SQL SELECT Error:", Error.message);
        throw Error;
    }
};

/**
 * Execute INSERT query
 */
export const InsertData = async (Query) => {
    try {
        const [Result] = await Pool.query(Query);
        return Result;
    } catch (Error) {
        console.error("SQL INSERT Error:", Error.message);
        throw Error;
    }
};

/**
 * Execute UPDATE query
 */
export const UpdateData = async (Query) => {
    try {
        const [Result] = await Pool.query(Query);
        return Result;
    } catch (Error) {
        console.error("SQL UPDATE Error:", Error.message);
        throw Error;
    }
};

/**
 * Execute DELETE query
 */
export const DeleteData = async (Query) => {
    try {
        const [Result] = await Pool.query(Query);
        return Result;
    } catch (Error) {
        console.error("SQL DELETE Error:", Error.message);
        throw Error;
    }
};

/**
 * Generic SQL query
 *
 * Can be used for:
 * SELECT
 * INSERT
 * UPDATE
 * DELETE
 * CREATE
 * ALTER
 * etc.
 */
export const ExecuteQuery = async (Query) => {
    try {
        const [Result] = await Pool.query(Query);
        return Result;
    } catch (Error) {
        console.error("SQL Error:", Error.message);
        throw Error;
    }
};

/**
 * Get a raw MySQL connection.
 *
 * Useful when transactions are required.
 */
export const GetConnection = async () => {
    return await Pool.getConnection();
};

/**
 * Gracefully close MySQL pool.
 */
export const ClosePool = async () => {
    await Pool.end();
    console.log("MySQL connection pool closed");
};

export default Pool;