import { StudentService } from '../service';
import { Router, Response, Request } from 'express';



export const StudentRouter = (router: Router, service: StudentService): void => {
    router.get('/', (req: Request, res: Response) => {
        console.log(req);
    })
}