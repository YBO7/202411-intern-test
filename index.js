const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());

// 기본 라우트 테스트
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
