// controllers/usuarioController.js
const Noticias = require('../model/noticiasModel');
const banco = require('../databases/connection') //vetor que simula um banco de dados.

const usuarioController = {

    home: (req, res) =>{
        res.send("Oi, tudo bem com você ?")
    },
    criarNoticia: (req, res)=>{
        const {titulo, descricao, data_publicacao, assunto, texto_materia, autor} = req.body 
        banco.insert({titulo, descricao, data_publicacao, assunto, texto_materia, autor}).table("noticias").then(data=>{
            console.log(data)
            res.json({message: 'Notícia salva com sucesso!'})
        }).catch(error=>{
            console.log(error)
        })
    }
}
module.exports = usuarioController;

