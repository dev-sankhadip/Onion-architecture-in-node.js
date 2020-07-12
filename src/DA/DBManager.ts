import { IDBManager, MySqlType } from "../types/IDBManager";
import { connection } from "./DBConnection";
import { MysqlError } from "mysql";

class DBManager implements IDBManager {
    
    ReadData(query: string, paramCollection: (string | number | boolean)[]): Promise<MySqlType> {
        return new Promise((resolve, reject) => {
            connection.query('select * from student', paramCollection, (err, result) => {
                if (err) {
                    return reject(err)
                }
                console.log(typeof result)
                return resolve(result);
            })
        })
    }

    InsertOrUpdateData(query: string, paramCollection: (string | number | boolean)[]): Promise<MySqlType> {
        return new Promise((resolve, reject) => {
            connection.query('select * from student', paramCollection, (err, result) => {
                if (err) {
                    return reject(err)
                }
                return resolve(result);
            })
        })
    }
    
    DeleteData(query: string, paramCollection: (string | number | boolean)[]): Promise<MySqlType> {
        return new Promise((resolve, reject) => {
            connection.query('select * from student', paramCollection, (err, result) => {
                if (err) {
                    return reject(err)
                }
                return resolve(result);
            })
        })
    }
}