const app = require('express')();
const PORT = 1212;

app.listen(
    PORT,
    () => console.log(`This is available on http://localhost:${PORT}`)
);

app.get('/endpoint1', (req,res) => {
    res.status(200).send({
        text:'Hi',
        text2:'You have reached endpoint 1'
    })
});