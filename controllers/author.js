const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:Qwerty@localhost:3306/joga_sequelize')

const models = require('../models')

const getAllAuthors = async (req, res) => {
    try {
        const authors = await models.Author.findAll({
            include: [{
                model: models.Article
            }]  
        })
        console.log(authors)
        res.status(200).json(authors)
    } catch (error) {
        res.status(500).send(error.message)
    } 
} 

const getAuthorById = async (req, res) => {
    try {
        const author = await models.Authors.findByPk(req.params.id, {
            include: [{
                model: models.Article
            }] 
        })
        console.log(author)
        res.status(200).json(author)
    } catch (error) {
        res.status(500).send(error.message)
    } 
} 

module.exports = {getAllAuthors, getAuthorById} 