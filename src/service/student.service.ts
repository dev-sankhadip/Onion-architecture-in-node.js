import { StudentDA } from "../DA";

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

    public async CreateStudent() {

    }

    public async UpdateStudent() {

    }

    public async DeleteStudent() {

    }
}