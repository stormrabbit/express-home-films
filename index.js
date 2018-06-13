const express = require('express');
const path = require('path');
const app = express();
const films = require('./films');
app.use('/static', express.static(path.join(__dirname, 'public')))

app.use('/films', films);

app.use('/', (req, res) => {
    console.log(`req==>${req.path} not found`);
    res.send(JSON.stringify({
        error: `404, page not found`
    }))
})

const server = app.listen(3000, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`server is running at ${host}:${port}`);
})
