module.exports = {
  dev: {
    bsFiles: {
      src: '<%= destFolder %>*.{css,php,js}'
    },
    options: {
      watchTask: true,
      proxy: '<%= pkg.devUrl %>',
      startPath: 'styleguide/index.html'
    }
  }
}
