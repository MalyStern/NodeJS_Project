import { configDotenv } from 'dotenv';
import router from './routers/helpReqestRouter'

import  express  from 'express';
const app = express();

configDotenv();
const server = express();
const hostname = process.env.HOST_NAME;
const port = process.env.PORT;

server.use(express.json());

server.use('/api/help-requests', router);
server.use('/', (req, res) => {
    res.send('welcome to our api');
});

server.listen(port, hostname, () => {
    console.log(`Server running at  http://${hostname}:${port}/`)
})