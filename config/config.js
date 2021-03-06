const path      = require('path');
const rootPath  = path.normalize(__dirname + '/..');
const env       = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'ecommerce'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/ecommerce-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'ecommerce'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/ecommerce-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'ecommerce'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/ecommerce-production'
  }
};

module.exports = config[env];
