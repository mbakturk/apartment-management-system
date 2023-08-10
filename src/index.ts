import express from 'express';

const app: express.Application = express();

const port: number = 3000;

app.use(express.static('public'));

app.use("/", express.static(__dirname + '/index.html'));

// Server setup
app.listen(port, () => {
    console.log(`TypeScript with Express
         http://localhost:${port}/`);
});