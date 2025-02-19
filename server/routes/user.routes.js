const express = require('express');
const router = express.Router();
const {signup, login, verifyToken, uploadFile} = require('../controller/user.controller');

router.post('/signup', signup);
router.post('/login', login);
router.post('/verifytoken', verifyToken);
router.post('/upload', uploadFile);

module.exports = router;
