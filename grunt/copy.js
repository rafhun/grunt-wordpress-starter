module.exports = {
  fonts: {
    files: [
      {
        expand: true,
        src: ['<%= pkg.srcFolders.fonts %>*'],
        dest: '<%= destFolder %><%= pkg.buildFolders.fonts %>',
        filter: 'isFile'
      }
    ]
  }
}
