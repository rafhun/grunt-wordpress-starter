module.exports = {
  default: {
    src: '<%= config.srcFolders.scss %>',
    options: {
      dest: '<%= config.rootFolder %><%= config.buildFolders.documentation %>',
      groups: {
        'undefined': 'Basic'
      },
      basePath: 'https://github.com/rafhun/grunt-wordpress-starter/tree/master',
      descriptionPath: '<%= config.srcFolders.scss %>documentation.md'
    }
  }
}
