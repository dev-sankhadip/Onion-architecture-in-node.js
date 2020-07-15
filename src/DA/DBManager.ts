import { IDBManager, MySqlType } from "../types/IDBManager";
import { connection } from "./DBConnection";

export class DBManager implements IDBManager {

    ReadData(query: string, paramCollection: (string | number | boolean)[] = []): Promise<MySqlType> {
        return new Promise((resolve, reject) => {
            connection.query(query, paramCollection, (err, result) => {
                if (err) {
                    return reject(err)
                }
                console.log(typeof result)
                return resolve(result);
            })
        })
    }

    InsertOrUpdateData(query: string, paramCollection: (string | number | boolean | undefined)[]): Promise<MySqlType> {
        return new Promise((resolve, reject) => {
            connection.query(query, paramCollection, (err, result) => {
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