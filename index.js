const express = require('express');
const cors = require('cors');
const pg = require('pg');
const app = express();
const PORT = process.env.PORT || 4001;
const port = 4001;

const client = new pg.Pool({
    // user: "postgres",
    // host: "localhost", 
    // password: "a123",
    // port: 5432,
    // database: "World",

    user: "intern_db_8tlf_user",
    host: "ldpg-csu2o6ggph6c73850ov0-a.oregon-postgres.render.com", 
    password: "MsFNZUhSb1LWUFl2zuMROSumqKs3vJxc",
    port: 5432,
    database: "intern_db_8tlf",
    ssl: true,
    // ssl: { rejectUnauthorized: false },
});

app.use(cors());

app.get('/', (req, res) => {
    res.send('Ready!');
});


app.get('/menu', async (req, res) => {
    await client.connect();
    const result = await client.query(
        'SELECT * FROM public.fruit_world'
    );
    // console.log(result.rows[1].img);
    res.send(result.rows[0].IMG);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
