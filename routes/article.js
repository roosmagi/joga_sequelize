const express = require('express')
const router = express.Router()
const articleController = require('../controllers/article')
const articleAdminController = require('../controllers/admin/article')

router.get('/', articleController.getAllArticles)
router.get('/:slug', articleController.getArticleBySlug)

router.post('/admin/article/create', articleAdminController.createArticle)
router.patch('/admin/article/edit/:id', articleAdminController.updateArticle);
router.post('/admin/article/delete/:id', articleAdminController.deleteArticle);

module.exports = router