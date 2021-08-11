const express = require('express');
const router = express.Router();

const EditarPerfilController = require('../controllers/EditarPerfilController');

router.get('/editarPerfil', EditarPerfilController.editarPerfil);

module.exports = router;