const express = require('express');
const router = express.Router();
// const url = require('url');

router.get('/', function(req, res, next) {
    console.log(req);
    res.json({ data: 'data' });
});

module.exports = router;
