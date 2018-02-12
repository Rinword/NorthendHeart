const express = require('express');
const router = express.Router();
const validations = require('../services/validations');

router.post('/', function(req, res, next) {
    const userData = req.body;

    if (!validations.validateBid(userData, [])) {
        res.status(400).json({ success: false, error: 'Bad form data' });
    }

    //post service here

    res.json({ success: true });
});

module.exports = router;
