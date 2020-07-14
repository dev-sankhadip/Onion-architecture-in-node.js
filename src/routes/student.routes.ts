import { StudentService } from '../service';
import { Router, Response, Request } from 'express';



export const StudentRouter = (router: Router, service: StudentService): void => {
    router.get('/', async (req: Request, res: Response) => {
        try {
            const data = await service.GetStudents();
            res.status(200).send(data)
        }
        catch (err) {
            res.status(500).send({ "err": err })
        }
    })
}