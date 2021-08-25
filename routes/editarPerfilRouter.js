const express = require('express');
const router = express.Router();

const EditarPerfilController = require('../controllers/EditarPerfilController');

router.get('/', EditarPerfilController.editarPerfil);

module.exports = router;


