import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.json({
        ok: 'Hello World!'
    })
});

app.listen(3001, () => {
    console.log('Listening on http://localhost:3001')
});