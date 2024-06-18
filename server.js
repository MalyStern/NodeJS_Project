import { configDotenv } from 'dotenv';
import requestRouter from './routers/helpReqestRouter.js'
import volunteerRouter from './routers/VolunteerRouter.js';

import  express  from 'express';
const app = express();

configDotenv();
const server = express();
const hostname = process.env.HOST_NAME;
const port = process.env.PORT;

server.use(express.json());

server.use('/api/helpRequest', requestRouter);

server.use('/api/volunteers', volunteerRouter);

server.use('/', (req, res) => {
    res.send('welcome to our api');
});

server.listen(port, hostname, () => {
    console.log(`Server running at  http://${hostname}:${port}/`)
})