module.exports = {
  favicon: {
    options: {
      removeComments: true,
      collapseWhitespace: true
    },
    files: {
      '<%= pkg.srcFolders.php %>favicons.hmtl' : '<%= pkg.srcFolders.php %>favicons.hmtl'
    }
  }
}
