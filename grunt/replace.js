module.exports = {
  local: {
    options: {
      patterns: [
        {
          json: '<%= secrets.local %>'
        }
      ]
    },
    src: '<%= pkg.srcFolders.config %>configuration.php',
    dest: '<%= pkg.buildFolders.config %>configuration.php'
  },
  server: {
    options: {
      patterns: [
        {
          json: '<%= secrets.server %>'
        }
      ]
    },
    src: '<%= pkg.srcFolders.config %>configuration.php',
    dest: '<%= pkg.buildFolders.config %>configuration.php'
  }
}
