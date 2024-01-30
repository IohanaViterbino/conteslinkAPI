// controllers/usuarioController.js
const Noticias = require('../model/noticiasModel');
const db = require('../databases/connection') //vetor que simula um banco de dados.

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
    criarNoticia: (req, res) => {
        const { titulo, descricao, assunto, texto_materia, autor } = req.body;
        let data_publicacao = new Date()
        // Criando uma instância da classe Noticias
        const noticia = new Noticias(titulo, descricao, data_publicacao, assunto, texto_materia, autor);

        // Inserindo os dados no banco de dados
        db.insert(noticia).table("noticias").then(data => {
            console.log(data);
            res.json({ message: 'Notícia salva com sucesso!' });
        }).catch(error => {
            console.log(error);
            res.status(500).json({ error: 'Erro ao salvar a notícia' });
        });
    },
    editarNoticia: (req, res)=>{
        const id = req.params
        const {titulo, descricao, data_publicacao, assunto, texto_materia, autor} = req.body 
        
        const noticia = new Noticias(titulo, descricao, data_publicacao, assunto, texto_materia, autor);

        db('noticias').where({ id: id.id })
            .update({
                titulo: noticia.titulo,
                descricao: noticia.descricao,
                data_publicacao: noticia.data_publicacao,
                assunto: noticia.assunto,
                texto_materia: noticia.texto_materia,
                autor: noticia.autor
            }).then(data => {
                console.log(data);
                res.json({ message: "Notícia atualizada com sucesso!" });
            }).catch(error => {
                console.error(error);
                res.status(500).json({ error: 'Erro ao atualizar a notícia' });
            });
    },
    deletarNoticia: (req, res) =>{
        const id = req.params
        db.where({id:id.id}).del().table("noticias").then(data => {
            res.json({message:"Noticia removida"})
        }).catch(error => {
            res.json(error)
        })
    },
    formEditarNoticia:(req, res)=>{
        const id = req.params
        console.log(id)
        db.select("*").table("noticias").where({id:id.id}).then(noticia=>{
            console.log(noticia)
            res.render('editarNoticia',{noticia})
        }).catch(error=>{
            console.log(error)
        })
    },
    formDeletarNoticia:(req, res)=>{
        const id = req.params
        console.log(id)
        db.select("*").table("noticias").where({id:id.id}).then(noticia=>{
            console.log(noticia)
            res.render('deletarNoticias',{noticia})
        }).catch(error=>{
            console.log(error)
        })
    },
    formCadastro:(req, res)=>{
        res.render('cadastroNoticia')
    }
}
module.exports = usuarioController;

