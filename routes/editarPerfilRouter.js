const express = require('express');
const router = express.Router();
const VerificaUsuarioLogado = require('../middlewares/VerificaUsuarioLogado');
const EditarPerfilController = require('../controllers/EditarPerfilController');

router.post('/editarPerfil/show', VerificaUsuarioLogado, EditarPerfilController.showPerfil);
router.post('/editarPerfil', VerificaUsuarioLogado, EditarPerfilController.registrarPerfil);

module.exports = router;


