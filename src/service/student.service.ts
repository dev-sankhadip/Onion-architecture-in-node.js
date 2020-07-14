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

    public async GetStudet() {

    }

    public async CreateStudent() {

    }

    public async UpdateStudent() {

    }

    public async DeleteStudent() {

    }
}