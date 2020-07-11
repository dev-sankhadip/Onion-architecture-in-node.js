export interface IDBManager {
    ReadData(query: string, paramCollection: (number | string | boolean)[]): void

    InsertOrUpdateData(query: string, paramCollection: (number | string | boolean)[]): void

    DeleteData(query: string, paramCollection: (number | string | boolean)[]): boolean
}