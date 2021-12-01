const express = require('express');
const router = express.Router();

const CadController = require('../controllers/CadController')

router.post('/registrar', CadController.registrar)

module.exports = router;
