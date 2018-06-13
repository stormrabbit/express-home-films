var express = require('express');
var router = express.Router();
var path = require('path');
// var co = require('co')
// dirPath
var dirPath = __dirname + '../db/db.json';
var dao = require('./../utils/dao');
/* GET users listing. */
router.get('/', function(req, res, next) {
    // console.log('get in');
    // console.log('__dirname==>', __dirname);
    // console.log('path==>', `${__dirname}/../public/index.html`);
    // res.setHeader('Content-Type', 'text/html');
    // // '../public/index.html'
    // res.sendfile(`${__dirname}/../public/index.html`)
    // // res.sendfile('../public/dist/index.html');
    // next();
    var temp =Promise.resolve(dao.readAll());
    console.log(temp);
    res.send(`you are get mock.js`); 
    // next();
});

router.put('/', function(req, res, next) {
    res.send(`you are put mock.js`); 
});

router.post('/', function(req, res, next) {
    // res.send('post');
});

router.delete('/', function(req, res, next){
    res.send('delete');
})


module.exports = router;
