import mysql from 'mysql';


const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'onion',
    port: 3308,
    connectionLimit: 10
})

export {
    connection
}