const express = require('express');
const router = express.Router();
const methodOverride = require('method-override');

const VerificaUsuarioLogado = require('../middlewares/VerificaUsuarioLogado');
const PerfilController = require('../controllers/PerfilController');

router.get('/dadosperfil', PerfilController.perfil);
router.get('/perfil', PerfilController.exibirPerfil);
router.put('/editar', PerfilController.editar);

module.exports = router;


