// include packages
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';

//route imports
import agentRoutes from './routes/agent.js';
import authenticate from './routes/middleware/auth.js';

const app = express();
const port = 4000 | process.env.PORT

// middleware
app.use(bodyParser.json());
app.use(helmet())
app.use(cors());
app.use(authenticate);

// import auth middleware

app.get('/', (req, res) => {
    res.json(202).json('Hello World');
});

app.use('/agents', agentRoutes);

// catch-all
app.use((req, res, next) => {
    res.status(404).send('Not found');
})

const server = app.listen(port, () => 
    console.log(`Server listening on port ${port}`)
);

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;