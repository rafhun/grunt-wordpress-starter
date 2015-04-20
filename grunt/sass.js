module.exports = {
  main: {
    options: {
      style: 'expanded',
      bundleExec: true,
      require: 'susy'
    },
    src: '<%= pkg.srcFolders.scss %>main.scss',
    dest: '<%= pkg.srcFolders.css %>style.css',
  },
  editorStyles: {
    options: {
      style: 'expanded',
      bundleExec: true,
      require: 'susy'
    },
    src: '<%= pkg.srcFolders.scss %>main.scss',
    dest: '<%= pkg.srcFolders.css %>editor-styles-unprefixed.css'
  }
}
