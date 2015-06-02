module.exports = {
  main: {
    src: '<%= pkg.srcFolders.scss %>main.scss',
    dest: '<%= pkg.srcFolders.css %>style.css',
  },
  editorStyles: {
    src: '<%= pkg.srcFolders.scss %>main.scss',
    dest: '<%= pkg.srcFolders.css %>editor-styles-unprefixed.css'
  }
}
