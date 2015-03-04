module.exports = {
  local: {
    options: {
      patterns: [
        {
          json: '<%= secrets.local %>'
        }
      ]
    },
    src: '<%= pkg.srcFolders.config %>wp-config-sample.php',
    dest: '<%= pkg.buildFolders.config %>wp-config.php'
  },
  server: {
    options: {
      patterns: [
        {
          json: '<%= secrets.server %>'
        }
      ]
    },
    src: '<%= pkg.srcFolders.config %>wp-config-sample.php',
    dest: '<%= pkg.buildFolders.config %>wp-config.php'
  }
}
