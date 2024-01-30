// routes/usuarioRoutes.js
const express = require('express');
const override = require('method-override')
const noticiasController = require('../controller/noticiasController');

const router = express.Router()
router.use(override('_method'))

// Rotas de notícia
router.get('/', noticiasController.home);
router.get('/listarNoticias', noticiasController.listarNoticias);
router.post('/criarNoticia', noticiasController.criarNoticia);
router.get('/editarNoticia/:id', noticiasController.formEditarAluno)
router.get('/cadastroNoticia', noticiasController.formCadastro)

module.exports = router;