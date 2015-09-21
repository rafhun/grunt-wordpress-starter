module.exports = {
  default: {
    src: '<%= config.srcFolders.scss %>',
    options: {
      dest: '<%= config.srcFolders.documentation %>',
      groups: {
        'undefined': 'Basic'
      },
      basePath: 'https://github.com/rafhun/wpbp/tree/master',
      descriptionPath: '<%= config.srcFolders.scss %>readme.md'
    }
  }
}
