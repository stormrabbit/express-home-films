const express = require('express');
const router = express.Router();
const walk = require('node-walkdir');
const path = require('path');
const fs = require('fs');
const prefix = 'static/';
const template = fs.readFileSync(path.join(__dirname, "doc.html"), "utf8");
router.get('/', (req, res) => {
    const allFiles = walk.sync(path.join(__dirname, 'public'), ['.mp4', '.mkv']);
    // console.log('allFiles==>');
    // console.log(allFiles);
    const films = allFiles.map(filename => {
        const urlStart = filename.indexOf('/public/') + '/public/'.length;
        const fileTitle = filename.substring(filename.lastIndexOf('/') + 1);
        return {
            title: fileTitle,
            url: `${prefix}${filename.substring(urlStart)}`
        };
    })
    // res.s
    res.end(template.replace("@menuList", JSON.stringify(films)));
    // res.send(JSON.stringify(films));
})

module.exports = router;