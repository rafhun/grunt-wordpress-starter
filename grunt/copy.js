module.exports = {
  editorStyles: {
    files: [{
      src: '<%= pkg.srcFolders.css %>editor-styles.css',
      dest: '<%= destFolder %>editor-styles.css'
    }]
  },
  fonts: {
    files: [
      {
        expand: true,
        cwd: '<%= pkg.srcFolders.fonts %>',
        src: ['*'],
        dest: '<%= destFolder %><%= pkg.buildFolders.fonts %>',
        filter: 'isFile'
      }
    ]
  },
  index: {
    files: [{
      expand: true,
      cwd: '<%= pkg.srcFolders.php %>',
      src: 'index.php',
      dest: '<%= destFolder %>',
    }]
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
