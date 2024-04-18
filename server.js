import express from 'express';

const app = express();
const port = 4000 | process.env.PORT

app.get('/', (req, res) => {
    res.json({message: 'hello world'});
});

const server = app.listen(port, () => 
    console.log(`Server listening on port ${port}`)
);

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
