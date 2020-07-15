import { IDBManager, MySqlType } from "../types/types";
import { connection } from "./DBConnection";

export class DBManager implements IDBManager {

    public ReadData(query: string, paramCollection: (string | number | boolean)[] = []): Promise<MySqlType> {
        return new Promise((resolve, reject) => {
            connection.query(query, paramCollection, (err, result) => {
                if (err) {
                    return reject(err)
                }
                return resolve(result);
            })
        })
    }

    public InsertOrUpdateData(query: string, paramCollection: (string | number | boolean | undefined)[]): Promise<MySqlType> {
        return new Promise((resolve, reject) => {
            connection.query(query, paramCollection, (err, result) => {
                if (err) {
                    return reject(err)
                }
                return resolve(result);
            })
        })
    }

    public DeleteData(query: string, paramCollection: (string | number | boolean)[]): Promise<MySqlType> {
        return new Promise((resolve, reject) => {
            connection.query(query, paramCollection, (err, result) => {
                if (err) {
                    return reject(err)
                }
                return resolve(result);
            })
        })
    }
}