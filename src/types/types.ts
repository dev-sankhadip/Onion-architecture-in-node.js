import { MysqlError } from "mysql";

export interface IDBManager {
    ReadData(query: string, paramCollection: (number | string | boolean)[]): Promise<any | MysqlError>

    InsertOrUpdateData(query: string, paramCollection: (number | string | boolean)[]): Promise<any | MysqlError>

    DeleteData(query: string, paramCollection: (number | string | boolean)[]): Promise<any | MysqlError>
}

export type MySqlType = MysqlError | any;

export interface IStudent {
    id?: string;
    name: string;
    email: string;
    age: number;
}