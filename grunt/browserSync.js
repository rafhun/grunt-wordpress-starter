module.exports = {
  dev: {
    bsFiles: {
      src: '<%= destFolder %>*.{css,php,js}'
    },
    options: {
      watchTask: true,
      proxy: '<%= pkg.localUrl %>',
      startPath: 'styleguide/index.html'
    }
  }
}
