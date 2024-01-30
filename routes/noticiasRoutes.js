// routes/usuarioRoutes.js
const express = require('express');
const noticiasController = require('../controller/noticiasController');

const router = express.Router()

// Rotas de notícia
router.get('/listarNoticias', noticiasController.listarNoticias);

module.exports = router;