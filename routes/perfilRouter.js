const express = require('express');
const router = express.Router();
const VerificaUsuarioLogado = require('../middlewares/VerificaUsuarioLogado');
const PerfilController = require('../controllers/PerfilController');

router.get('/perfil', PerfilController.perfil);
router.post('/registrarPerfil', PerfilController.registrarPerfil);

module.exports = router;


