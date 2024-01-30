// controllers/usuarioController.js
const Noticias = require('../models/noticiasModel');
const banco = [] //vetor que simula um banco de dados.

const usuarioController = {

    home: (req, res) =>{
        res.send("Oi, tudo bem com você ?")
    },
    criar: (req, res)=>{
        const {nome, email, senha} = req.body 
        console.log(nome)
        const user = new Usuario(nome, email, senha)
        if(user){
            res.json(user)
            banco.push(user)
        }else{
            res.send("Erro")
        }
        console.log(user)
    },
    formCadastro: (req, res) =>{
        res.render('CadUser')
    },
    listar: (req, res) =>{
        res.render('listarUsers',{users:banco})
    }

}
module.exports = usuarioController;

