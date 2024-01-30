// routes/usuarioRoutes.js
const express = require('express');
const noticiasController = require('../controller/noticiasController');

const router = express.Router()

// Rotas de notícia
router.get('/', noticiasController.home);
router.post('/criarNoticia', noticiasController.criarNoticia);

module.exports = router;