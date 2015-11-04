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
  },
  sass: {
    dev: root.dev + '/files/sass/*.scss',
    pub: root.pub + '/files/css',
    options: {
      sourcemap: false,
      style: 'expanded',
      emitCompileError: true,
      compass: false
    }
  },
  img: {
    dev: root.dev + '/files/img/**',
    pub: root.pub + '/files/img',
  }
};