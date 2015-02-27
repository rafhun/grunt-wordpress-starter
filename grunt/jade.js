module.exports = {
  compile: {
    options: {
      data: {
        debug: false
      }
    },
    files: [{
      expand: true,
      cwd: '<%= pkg.srcFolders.jade %>',
      src: ['*.jade'],
      dest: '<%= destFolder %>',
      ext: '.html'
    }]
  }
}
