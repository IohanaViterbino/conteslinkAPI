// controllers/usuarioController.js
const Noticias = require('../model/noticiasModel');
const db = require('../databases/connection')

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
}
module.exports = usuarioController;

