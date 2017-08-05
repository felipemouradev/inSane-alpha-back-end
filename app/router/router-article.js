const express = require('express'),
  router = express.Router(),
  ArticleController = require('../controllers/article'),
  AuthMiddleware = require('../middlewares/auth-middleware');


module.exports = function (app) {
  app.use('/article', router);
};

router.use(AuthMiddleware);

router.get('/', ArticleController.index);
router.post('/', ArticleController.newArticles);
router.put('/:id', ArticleController.editArticle);
router.delete('/:id', ArticleController.deleteArticle);
