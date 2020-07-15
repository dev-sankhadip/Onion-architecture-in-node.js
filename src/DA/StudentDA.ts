import { DBManager } from "./DBManager";
import shortid from 'shortid';
import { IStudent } from "../types/types";


export class StudentDA extends DBManager {
    public async GetStudents() {
        const query = "select * from student"
        try {
            const data = await this.ReadData(query);
            return data;
        }
        catch (err) {
            throw err;
        }
    }

    public async GetStudent(id: string) {
        const query = "select * from student where id  = ?";
        try {
            const data = await this.ReadData(query, [id]);
            return data;
        }
        catch (err) {
            throw err;
        }
    }

    public async CreateStudent(data: IStudent) {
        const query = "insert into student(id, name, email, age) values(?,?,?,?)";
        try {
            const result = await this.InsertOrUpdateData(query, [data.id, data.name, data.email, data.age]);
            return result;
        }
        catch (err) {

        }
    }

    public async UpdateStudent(data: IStudent) {
        const query = "update student set name=?, email=?, age=? where id = ?";
        try {
            const result = await this.InsertOrUpdateData(query, [data.name, data.email, data.age, data.id]);
            return result;
        }
        catch (err) {
            throw err;
        }
    }

    public async DeleteStudent(id: string) {
        const query = "delete from student where id = ?";
        try {
            const result = await this.DeleteData(query, [id]);
            return result;
        } catch (error) {
            throw error;
        }
    }
}