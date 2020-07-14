import { DBManager } from "./DBManager";

export class StudentDA extends DBManager {
    public async GetStudents() {
        const query = "select * from student"
        try {
            const data = await this.ReadData(query);
            return data;
        }
        catch (err) {
            console.log(err)
        }
    }

    public GetStudet() {

    }

    public CreateStudent() {

    }

    public UpdateStudent() {

    }

    public DeleteStudent() {

    }
}