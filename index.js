const app = require('express')();
const PORT = 1234;

app.listen(
    PORT,
    () => console.log(`This is available on http://localhost:${PORT}`)
);