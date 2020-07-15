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

    router.get('/:id', async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const data = await service.GetStudent(id);
            res.status(200).send(data);
        }
        catch (err) {
            res.status(500).send({ "err": err })
        }
    })

    router.post('/', async (req: Request, res: Response) => {
        try {
            const { name, email, age } = req.body;
            const result = await service.CreateStudent({ name, email, age });
            res.status(200).send(result)
        }
        catch (err) {
            console.log(err)
            res.status(500).send(err);
        }
    })

    router.put('/:id', async (req: Request, res: Response) => {
        try {
            const { name, email, age } = req.body;
            const { id } = req.params;
            const result = await service.UpdateStudent({ name, email, age, id });
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send(error);
        }
    })

    router.delete('/:id', async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const result = await service.DeleteStudent(id);
            res.status(200).send(result);
        }
        catch (err) {
            res.status(500).send(err);
        }
    })
}