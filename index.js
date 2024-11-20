const express = require('express');
const cors = require('cors');
const pg = require('pg');
const app = express();
const port = 4000;

const client = new pg.Pool({
    user: "postgres",
    host: "localhost", 
    password: "a123",
    port: 5432,
    database: "World",
    // ssl: { rejectUnauthorized: false },
});

app.use(cors());

app.get('/', (req, res) => {
    res.send('Ready!');
});


app.get('/apple', async (req, res) => {
    await client.connect();
    const result = await client.query(
        'SELECT id, img FROM public.fruit_world'
    );
    // console.log(result.rows[1].img);
    res.send(result.rows[0].img)
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
