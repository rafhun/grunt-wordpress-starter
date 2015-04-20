module.exports = {
  options: {
    browsers: ['last 2 versions']
  },
  main: {
    src: '<%= sass.dist.dest %>',
    dest: '<%= destFolder %>style.css'
  },
  editorStyles: {
    src: '<%=sass.editorStyles.dest %>',
    dest: '<%= pkg.srcFolders.css %>editor-styles.css'
  }
}
