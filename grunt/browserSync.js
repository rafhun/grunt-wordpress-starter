module.exports = {
  dev: {
    bsFiles: {
      src: '<%= destFolder %>*.{css,php,js}'
    },
    options: {
      watchTask: true,
      proxy: '<%= config.devUrl %>',
      startPath: 'styleguide/index.html'
    }
  }
}
