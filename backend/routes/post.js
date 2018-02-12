const express = require('express');
const router = express.Router();
const validations = require('../services/validations');

const vars = require('../../constants');
const MAILGUN_API_KEY = vars.MAILGUN_API_KEY;
const MAILGUN_SMPT_LOGIN = vars.MAILGUN_SMPT_LOGIN;
const EMAIL_FOR_BIDS = vars.EMAIL_FOR_BIDS;
const mailgun = require('mailgun-js')({ apiKey: MAILGUN_API_KEY, domain: MAILGUN_SMPT_LOGIN });

router.post('/', function(req, res, next) {
    const userData = req.body;

    if (!validations.validateBid(userData, ['date'])) {
        return res.status(400).json({ success: false, error: 'Bad form data' });
    }

    const data = {
        from: 'Новая заявка <noreply@plusmodul.com>',
        to: EMAIL_FOR_BIDS,
        subject: 'Новая заявка с plusmodul.com',
        html: `
            <div style="background: radial-gradient(farthest-side at 45% 105%, #0d3f58, #000000);
               padding: 20px 30px;
               color: white;
               font-size: 32px;
               width: 440px;">
                <h2 style="margin-top: 0; margin-bottom: 10px; font-weight: 400; border-bottom:1px solid white">
                    Новая заявка
                </h2>
                <div style="display: inline-block;padding: 10px 0;width: 100%;">
                    <div style="font-weight: 500;font-size: 0.8em;float: left;">Имя</div>
                    <span style="font-size: 0.8em;float: right;font-weight: 300;">${userData.name}</span>
                </div>
                <div style="display: inline-block;padding: 10px 0;width: 100%;">
                    <div style="font-weight: 500;font-size: 0.8em;float: left;">Email</div>
                    <span style="font-size: 0.8em;float: right;font-weight: 300;">${userData.email}</span>
                </div>
                <div style="display: inline-block;padding: 10px 0;width: 100%;">
                    <div style="font-weight: 500;font-size: 0.8em;float: left;">Телефон</div>
                    <span style="font-size: 0.8em;float: right;font-weight: 300;">${userData.phone}</span>
                </div>
                <div style="display: inline-block;padding: 10px 0;width: 100%;">
                    <div style="font-weight: 500;font-size: 0.8em;float: left;">Удобное время</div>
                    <span style="font-size: 0.8em;float: right;font-weight: 300;">
                        ${userData.date || '-не указано-'}
                    </span>
                </div>
            </div>`,
    };

    mailgun.messages().send(data, (error, body) => {
        console.log(body);
        if (error) {
            res.status(400).json({ success: false, error: 'Post Service returns ' + error });
        } else {
            res.json({ success: true });
        }
    });
});

module.exports = router;
