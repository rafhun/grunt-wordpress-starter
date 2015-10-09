module.exports = {
  dev: {
    bsFiles: {
      src: ['<%= destFolder %>*.{css,php,js}', '<%= config.rootFolder %><%= config.buildFolders.styleguide %>*.html']
    },
    options: {
      watchTask: true,
      proxy: '<%= config.devUrl %>',
      startPath: '<%= config.buildFolders.styleguide %>'
    }
  }
}
