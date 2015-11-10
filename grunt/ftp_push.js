module.exports = {
  staging: {
    options: {
      host: '<%= secrets.staging.ftpHost %>',
      dest: '<%= secrets.staging.ftpDest %>',
      username: '<%= secrets.staging.ftpUser %>',
      password: '<%= secrets.staging.ftpPass %>'
    },
    files: [
      {
        expand: true,
        cwd: '<%= config.rootFolder %>',
        src: ['**']
      }
    ]
  },
  production: {
    options: {
      host: '<%= secrets.production.ftpHost %>',
      dest: '<%= secrets.production.ftpDest %>',
      username: '<%= secrets.production.ftpUser %>',
      password: '<%= secrets.production.ftpPass %>'
    },
    files: [
      {
        expand: true,
        cwd: '<%= config.rootFolder %>',
        src: ['**']
      }
    ]
  }
}
