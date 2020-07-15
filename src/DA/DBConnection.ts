import mysql from 'mysql';
import dotenv from 'dotenv'


dotenv.config();
const connection = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: 3308,
    connectionLimit: 10
})

export {
    connection
}