const express = require('express');
const router = express.Router();
const VerificaUsuarioLogado = require('../middlewares/VerificaUsuarioLogado');

const EditarPerfilController = require('../controllers/EditarPerfilController');

router.get('/editarPerfil', VerificaUsuarioLogado, EditarPerfilController.editarPerfil);
router.get('/registrarPerfil', VerificaUsuarioLogado, EditarPerfilController.registrarPerfil);

module.exports = router;



