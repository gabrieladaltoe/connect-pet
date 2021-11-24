const express = require('express');
const router = express.Router();
const methodOverride = require('method-override');

const VerificaUsuarioLogado = require('../middlewares/VerificaUsuarioLogado');
const AmizadesController = require('../controllers/AmizadesController');


router.get('/amizades', AmizadesController.exibirAmigos);


module.exports = router;
