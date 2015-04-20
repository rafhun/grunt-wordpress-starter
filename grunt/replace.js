module.exports = {
  local: {
    options: {
      patterns: [
        {
          json: '<%= secrets.local %>'
        }
      ]
    },
    src: '<%= pkg.srcFolders.config %>wp-config.php',
    dest: '<%= pkg.buildFolders.config %>wp-config.php'
  },
  staging: {
    options: {
      patterns: [
        {
          json: '<%= secrets.staging %>'
        }
      ]
    },
    src: '<%= pkg.srcFolders.config %>wp-config.php',
    dest: '<%= pkg.buildFolders.config %>wp-config.php'
  },
  production: {
    options: {
      patterns: [
        {
          json: '<%= secrets.production %>'
        }
      ]
    },
    src: '<%= pkg.srcFolders.config %>wp-config.php',
    dest: '<%= pkg.buildFolders.config %>wp-config.php'
  },
  favicon: {
    options: {
      patterns: [
        {
          match: 'include',
          replacement: '<%= grunt.file.read("<%= pkg.srcFolders.php %>favicons.html") %>'
        }
      ]
    },
    src: '<%= pkg.srcFolders.php %>index.php',
    dest: '<%= destFolder %>'
  }
}
