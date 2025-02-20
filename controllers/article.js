// get connection to database ORM object
const Sequelize = require('sequelize')
const article = require('../models/article')
const sequelize = new Sequelize('mysql://root:Qwerty@localhost:3306/joga_sequelize')

// read model data form table representation
const Article = require('../models/article')(sequelize, Sequelize.DataTypes)

// get all data from table
const getAllArticles = (req, res) => {
    Article.findAll()
    .then(articles => {
        console.log(articles)
        return res.status(200).json({ articles })
    })
    .catch (error => {
        return res.status(500).send(error.message)
    })
} 

module.exports = {getAllArticles} 