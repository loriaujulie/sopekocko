/* Routes finales - l'origine se trouve dans l'application express */
const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/users.js');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;