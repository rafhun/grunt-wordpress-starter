module.exports = {
  editorStyles: {
    files: [{
      src: '<%= config.srcFolders.css %>editor-styles.css',
      dest: '<%= destFolder %>editor-styles.css'
    }]
  },
  fonts: {
    files: [
      {
        expand: true,
        cwd: '<%= config.srcFolders.fonts %>',
        src: ['*'],
        dest: '<%= destFolder %><%= config.buildFolders.fonts %>',
        filter: 'isFile'
      }
    ]
  },
  index: {
    files: [{
      expand: true,
      cwd: '<%= config.srcFolders.php %>',
      src: 'index.php',
      dest: '<%= destFolder %>',
    }]
  },
  php: {
    files: [
      {
        expand: true,
        cwd: '<%= config.srcFolders.php %>',
        src: ['**'],
        dest: '<%= destFolder %>',
      }
    ]
  },
  htaccess: {
    files: [
      {
        src: '<%= config.srcFolders.config %>.htaccess',
        dest: '<%= config.rootFolder %>.htaccess'
      }
    ]
  }
}
