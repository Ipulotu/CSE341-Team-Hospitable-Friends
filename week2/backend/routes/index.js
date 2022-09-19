const express = require('express');
const router = express.Router();
const {getProfessional} = require('../controllers/professional')

router.get('/professional', getProfessional)

module.exports = router;