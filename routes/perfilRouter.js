const express = require('express');
const router = express.Router();
const VerificaUsuarioLogado = require('../middlewares/VerificaUsuarioLogado');
const PerfilController = require('../controllers/PerfilController');

router.get('/perfil', VerificaUsuarioLogado, PerfilController.perfil);
router.post('/registrarPerfil', VerificaUsuarioLogado, PerfilController.registrarPerfil);

module.exports = router;


