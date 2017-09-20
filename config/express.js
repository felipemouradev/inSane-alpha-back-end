const express         = require('express');
const glob            = require('glob');
const logger          = require('morgan');
const cookieParser    = require('cookie-parser');
const bodyParser      = require('body-parser');
const compress        = require('compression');
const methodOverride  = require('method-override');

module.exports = (app, config) => {
  let env = process.env.NODE_ENV || 'development';
  app.locals.ENV = env;
  app.locals.ENV_DEVELOPMENT = env === 'development';

  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(cookieParser());
  app.use(compress());
  app.use(express.static(config.root + '/public'));
  app.use(methodOverride());

  let routes = glob.sync(config.root + '/app/router/*.js');
  routes.forEach( (route) => {
    require(route)(app);
  });

  app.use( (req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  return app;
};
