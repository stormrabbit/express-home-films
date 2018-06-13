var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log('get in');
    console.log('__dirname==>', __dirname);
    console.log('path==>', `${__dirname}/../public/index.html`);
    res.setHeader('Content-Type', 'text/html');
    // '../public/index.html'
    res.sendfile(`${__dirname}/../public/index.html`)
    // res.sendfile('../public/dist/index.html');
    next();
//   res.send(`you are querying mock.js`);
});

/* GET users listing. */
router.get('/form', function(req, res, next) {
//   const temp = {
//     id: 'fuck',
//     childNode: 'input'
//   };
//   const tempStr = JSON.stringify(temp);
//   res.send(tempStr);
    res.setHeader('Content-Type', 'text/html');
    // '../public/index.html'
    res.sendfile(`${__dirname}/../public/index.html`)
});

module.exports = router;
