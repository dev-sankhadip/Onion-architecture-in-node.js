import { StudentDA } from "../DA";
import { IStudent } from "../types/types";
import shortid from "shortid";

export class StudentService {

    constructor(private studentDA: StudentDA) { }
    public async GetStudents() {
        try {
            const data = await this.studentDA.GetStudents();
            return data;
        }
        catch (err) {
            console.log(err);
        }
    }

    public async GetStudent(id: string) {
        try {
            const data = await this.studentDA.GetStudent(id);
            return data;
        } catch (error) {
            throw error;
        }
    }

    public async CreateStudent(data: IStudent) {
        try {
            const id = shortid.generate();
            const result = await this.studentDA.CreateStudent({ ...data, id });
            return result;
        }
        catch (err) {
            throw err;
        }
    }

    public async UpdateStudent(data: IStudent) {
        try {
            const result = await this.studentDA.UpdateStudent(data);
            return result;
        } catch (error) {
            throw error;
        }
    }

    public async DeleteStudent(id: string) {
        try {
            const result = await this.studentDA.DeleteStudent(id);
            return result;
        } catch (error) {
            throw error;
        }
    }
}