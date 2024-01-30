// routes/usuarioRoutes.js
const express = require('express');
const noticiasController = require('../controllers/noticiasController');

const router = express.Router()

// Rotas de notícia
router.get('/home', usuarioController.home);
router.get('/listar', usuarioController.listar);
router.get('/criarUser', usuarioController.formCadastro);
router.post('/criar', usuarioController.criar);

module.exports = router;