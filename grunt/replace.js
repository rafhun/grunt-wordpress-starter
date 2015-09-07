module.exports = {
  local: {
    options: {
      patterns: [
        {
          json: '<%= secrets.local %>'
        }
      ]
    },
    src: '<%= config.srcFolders.config %>wp-config.php',
    dest: '<%= config.buildFolders.config %>wp-config.php'
  },
  staging: {
    options: {
      patterns: [
        {
          json: '<%= secrets.staging %>'
        }
      ]
    },
    src: '<%= config.srcFolders.config %>wp-config.php',
    dest: '<%= config.buildFolders.config %>wp-config.php'
  },
  production: {
    options: {
      patterns: [
        {
          json: '<%= secrets.production %>'
        }
      ]
    },
    src: '<%= config.srcFolders.config %>wp-config.php',
    dest: '<%= config.buildFolders.config %>wp-config.php'
  },
  favicon: {
    options: {
      patterns: [
        {
          match: 'include',
          replacement: '<%= grunt.file.read("<%= config.srcFolders.php %>favicons.html") %>'
        }
      ]
    },
    src: '<%= config.srcFolders.php %>index.php',
    dest: '<%= destFolder %>'
  },
  // replace the keys with ones that can be downloaded directly through the wp api
  keys: {
    options: {
      patterns: [
        {
          match: 'include',
          replacement: '<%= grunt.file.read("keys.php") %>'
        }
      ]
    },
    src: '<%= config.srcFolders.config %>wp-config-sample.php',
    dest: '<%= config.srcFolders.config %>wp-config.php'
  }
}
