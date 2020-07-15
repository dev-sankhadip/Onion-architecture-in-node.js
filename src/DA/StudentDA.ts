import { DBManager } from "./DBManager";

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

    public CreateStudent() {

    }

    public UpdateStudent() {

    }

    public DeleteStudent() {

    }
}