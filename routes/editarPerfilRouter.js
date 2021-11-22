const express = require('express');
const router = express.Router();
const VerificaUsuarioLogado = require('../middlewares/VerificaUsuarioLogado');
const EditarPerfilController = require('../controllers/EditarPerfilController');
const SocialController = require('../controllers/SocialController');

router.get('/editarPerfil', VerificaUsuarioLogado, EditarPerfilController.showPerfil);
router.post('/editarPerfil', VerificaUsuarioLogado, EditarPerfilController.registrarPerfil);
module.exports = router;


