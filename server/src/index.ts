import express from 'express';

const app = express();
const PORT = 9000;

app.get('/', (req, res) => res.send("Hello JavaScript"));

app.listen(PORT, () => console.log(`Server started http://localhost:${PORT}`));