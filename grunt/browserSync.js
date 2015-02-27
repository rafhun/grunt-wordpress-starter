module.exports = {
  dev: {
    bsFiles: {
      src: '<%= destFolder %>*.css'
    },
    options: {
      watchTask: true,
      proxy: '<%= pkg.devUrl %>'
    }
  }
}
