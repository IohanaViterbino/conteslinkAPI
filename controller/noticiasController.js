// controllers/usuarioController.js
const Noticias = require('../model/noticiasModel');
const db = require('../databases/connection') //vetor que simula um banco de dados.

const usuarioController = {

    listarNoticias: (req, res) => {
        db.select("*").table("noticias")
            .then(noticia => {
                console.log(noticia);
                res.json({ noticias: noticia }); // Modificado para res.json()
            })
            .catch(error => {
                console.log(error);
                res.status(500).json({ error: 'Erro ao obter notícias.' }); // Adicionado tratamento de erro
            });
    },    
    criarNoticia: (req, res)=>{
        const {titulo, descricao, data_publicacao, assunto, texto_materia, autor} = req.body 
        db.insert({titulo, descricao, data_publicacao, assunto, texto_materia, autor}).table("noticias").then(data=>{
            console.log(data)
            res.json({message: 'Notícia salva com sucesso!'})
        }).catch(error=>{
            console.log(error)
        })
    },
    editarNoticia: (req, res)=>{
        const id = req.params
        const {titulo, descricao, data_publicacao, assunto, texto_materia, autor} = req.body 
        db.where({id:id.id}).update({titulo, descricao, data_publicacao, assunto, texto_materia, autor}).table("noticias").then(data=>{
            console.log(data)
            res.json({message: "noticia atualizada com sucesso!"})
        }).catch(error=>{
            res.json(error)
        })
    },
    deletarNoticia: (req, res) =>{
        const id = req.params
        db.where({id:id.id}).del().table("noticias").then(data => {
            res.json({message:"Noticia removida"})
        }).catch(error => {
            res.json(error)
        })
    }
}
module.exports = usuarioController;

