// routes/usuarioRoutes.js
const express = require('express');
const noticiasController = require('../controller/noticiasController');

const router = express.Router()

// Rotas de notícia
router.get('/listarNoticias', noticiasController.listarNoticias);
router.post('/criarNoticia', noticiasController.criarNoticia);
router.put('/editarNoticia/:id', noticiasController.editarNoticia);
router.delete('/deletarNoticia/:id', noticiasController.deletarNoticia);

module.exports = router;