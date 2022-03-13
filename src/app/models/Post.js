const db = require('./db')

const Post = db.sequelize.define('postagens', {
    descricao: {
        type: db.Sequelize.STRING
    },
     solucao: {
         type: db.Sequelize.TEXT
     }
})

//Criando as  Colunas
//Post.sync({force:true})

module.exports = Post
