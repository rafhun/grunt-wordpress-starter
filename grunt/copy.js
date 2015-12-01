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
  languages: {
    files: [{
      expand: true,
      cwd: '<%= config.srcFolders.languages %>',
      src: ['**'],
      dest: '<%= destFolder %><%= config.buildFolders.languages %>'
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
  },
  htaccessProduction: {
    files: [
      {
        src: '<%= config.srcFolders.config %>.htaccess~production',
        dest: '<%= config.rootFolder %>.htaccess'
      }
    ]
  },
  customPlugins: {
    files: [
      {
        expand: true,
        cwd: '<%= config.srcFolders.customPlugins %>',
        src: ['**'],
        dest: '<%= config.rootFolder %><%= config.buildFolders.plugins %>',
      }
    ]
  },
  customThemes: {
    files: [
      {
        expand: true,
        cwd: '<%= config.srcFolders.customThemes %>',
        src: ['**'],
        dest: '<%= config.rootFolder %><%= config.buildFolders.themes %>',
      }
    ]
  }
}
