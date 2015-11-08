// var path = require('path');
var root = {
  dev : './htdocs/dev',
  pub : './htdocs/public'
};
var jsFileName = 'main.js';

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
  imagemin: {
    dev: root.dev + '/files/img/**',
    pub: root.pub + '/files/img',
    options: {
      progressive: true, //jpg
      optimizationLevel: 7 //png
    }
  },
  pleeease: {
    options: {
      autoprefixer: {
        'browsers': ['last 4 versions']
      },
      minifier: false
    }
  },
  js: {
    dev: root.dev + '/files/js/*.js',
    pub: root.pub + '/files/js'
  },
  webpack: {
    entry: root.dev + '/files/js/' + jsFileName,
    output: {
      filename: '[name].js'
    },
    resolve: {
      extensions: ['', '.js']
    }
  }
};