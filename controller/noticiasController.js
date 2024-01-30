// controllers/usuarioController.js
const Noticias = require('../model/noticiasModel');
const db = require('../databases/connection')

const usuarioController = {

    home: (req, res) =>{
        res.render('index.js')
    },
    listarNoticias: (req, res) => {
        db.select("*").table("noticias")
            .then(noticia => {
                console.log(noticia);
                //res.json({ noticias: noticia });
                res.render('listarNoticias', {noticias:noticia});
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
    formEditarAluno:(req, res)=>{
        const id = req.params
        console.log(id)
        db.select("*").table("noticias").where({id:id.id}).then(noticia=>{
            console.log(noticia)
            res.render('editarNoticia',{noticia})
        }).catch(error=>{
            console.log(error)
        })
    },
    formCadastro:(req, res)=>{
        res.render('cadastroNoticia')
    },


}
module.exports = usuarioController;

