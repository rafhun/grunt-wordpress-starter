module.exports = {
  favicon: {
    options: {
      removeComments: true,
      collapseWhitespace: true
    },
    files: {
      '<%= pkg.srcFolders.jade %>favicons.hmtl' : '<%= pkg.srcFolders.jade %>favicons.hmtl'
    }
  }
}
