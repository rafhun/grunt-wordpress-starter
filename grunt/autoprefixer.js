module.exports = {
  options: {
    browsers: ['last 2 versions']
  },
  single_files: {
    src: '<%= sass.dist.dest %>',
    dest: '<%= pkg.srcFolders.css %>style-prefixed.css'
  }
}
