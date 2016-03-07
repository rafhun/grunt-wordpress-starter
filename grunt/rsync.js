module.exports = {
  options: {
    ssh: true,
    args: ['--verbose'],
    recursive: true,
    // use commented out line after first push to staging and live server unless you change something in your configuration file since some plugins (mainly wp super cache) write directly to the wp-config file.
    // before pushing wp-config.php changes anew make sure to copy down all online changes into your src/config folder
    exclude: ['.git', '.hg', '.svn', '.DS_Store', '._*', 'Thumbs.db', '/wp-content/uploads/**', '/wp-content/backupwordpress*', '.map'],
    // exclude: ['.git', '.hg', '.svn', '.DS_Store', '._*', 'Thumbs.db', '/wp-content/uploads/**', '/wp-config.php', '/wp-content/backupwordpress*', '.map'],
    compareMode: 'checksum'
  },
  staging: {
    options: {
      include: ['.map'],
      src: '<%= config.rootFolder %>',
      dest: '<%= secrets.staging.sshRoot %>',
      host: '<%= secrets.staging.sshHost %>',
      delete: false
    }
  },
  stagingDry: {
    options: {
      args: ['--verbose', '--dry-run'],
      src: '<%= config.rootFolder %>',
      dest: '<%= secrets.staging.sshRoot %>',
      host: '<%= secrets.staging.sshHost %>',
      delete: true
    }
  },
  production: {
    options: {
      src: '<%= config.rootFolder %>',
      dest: '<%= secrets.production.sshRoot %>',
      host: '<%= secrets.production.sshHost %>',
      delete: false
    }
  },
  productionDry: {
    options: {
      args: ['--verbose', '--dry-run'],
      src: '<%= config.rootFolder %>',
      dest: '<%= secrets.production.sshRoot %>',
      host: '<%= secrets.production.sshHost %>',
      delete: true
    }
  }
}
