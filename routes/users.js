var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('=============><==============')
  console.log(req.query);
  const {
    id
  } = req.query;

  const temp = Object.keys(req.query).reduce( (pre, cur) => {
      pre += `${cur} : ${req.query[cur]}  `
      return pre;
  }, ``)

  res.send(`you are querying ${temp}`);
});

/* GET users listing. */
router.get('/form', function(req, res, next) {
  const temp = {
    id: 'fuck',
    childNode: 'input'
  };
  const tempStr = JSON.stringify(temp);
  res.send(tempStr);
});

module.exports = router;
