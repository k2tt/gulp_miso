// var path = require('path');
var root = {
  dev : './htdocs/dev',
  pub : './htdocs/public'
};

module.exports = {
  dev: root.dev,
  pub: root.pub,
  copy: {
    dev: root.dev + '/**/*.html',
    pub: root.pub
  }
};