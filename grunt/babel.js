module.exports = {
  options: {
    compact: true,
    presets: ['es2015'],
    sourceMap: true
  },
  dist: {
    src: '<%= concat.dist.dest %>',
    dest: '<%= config.srcFolders.jsBuild %>script.babel.js'
  }
}
