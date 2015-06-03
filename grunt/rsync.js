module.exports = {
  options: {
    args: ['--verbose'],
    recursive: true,
  },
  production: {
    options: {
      src: 'wwwroot/',
      dest: '<%= secrets.production.sshRoot %>',
      host: '<%= secrets.production.sshHost',
      delete: true
    }
  },
  productionDry: {
    options: {
      args: ['--verbose', '--dry-run'],
      src: 'wwwroot/',
      dest: '<%= secrets.production.sshRoot %>',
      host: '<%= secrets.production.sshHost %>',
      delete: true
    }
  }
}
