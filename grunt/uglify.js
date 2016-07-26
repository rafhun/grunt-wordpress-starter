module.exports = {
  options: {
    sourceMap: true,
    sourceMapIncludeSources: true,
    sourceMapIn: '<%= concat.dist.dest %>.map',
    preserveComments: false,
    screwIE8: true
  },
  build: {
    src: '<%= babel.dist.dest %>',
    dest: '<%= destFolder %><%= config.buildFolders.js %>script.min.js'
  }
}
