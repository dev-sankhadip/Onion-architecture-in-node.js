import express from 'express';
import dotenv from 'dotenv';

import { StudentDA } from './DA/index';
import { StudentService } from './service/index';
import { StudentRouter } from "./routes/index";


dotenv.config();


const app = express();
const router = express.Router();

app.use('/', router);

StudentRouter(router, new StudentService(new StudentDA()));





app.listen(process.env.PORT, () => {
    console.log(`server running on ${process.env.PORT}`);
})