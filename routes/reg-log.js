
const express = require('express');
const router = express.Router();
const reg = require('../controllers/register_oldal.js');

router.post('/reg', reg.postreg);
module.exports = router;