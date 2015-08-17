module.exports = {
  main: {
    src: '<%= config.srcFolders.scss %>style.scss',
    dest: '<%= config.srcFolders.css %>style.css',
  },
  editorStyles: {
    src: '<%= config.srcFolders.scss %>style.scss',
    dest: '<%= config.srcFolders.css %>editor-styles-unprefixed.css'
  }
}
