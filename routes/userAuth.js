const express = require('express');
const router = express.Router();
const { renderSignUp } = require('../controllers/userAuthController');

router.get('/sign-up',renderSignUp )

module.exports = router;