module.exports = {
  dist: {
    options: {
      style: 'expanded',
      bundleExec: true,
      require: 'susy'
    },
    src: '<%= pkg.srcFolders.scss %>main.scss',
    dest: '<%= pkg.srcFolders.css %>style.css',
  }
}
