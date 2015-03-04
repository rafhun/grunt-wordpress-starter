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
  },
  php: {
    files: [
      {
        expand: true,
        cwd: '<%= pkg.srcFolders.php %>',
        src: ['**'],
        dest: '<%= destFolder %>',
      }
    ]
  }
}
