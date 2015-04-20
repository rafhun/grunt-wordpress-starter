module.exports = {
  bundler: {
    command: 'bundle'
  },
  bower: {
    command: 'bower install'
  },
  bundlerUpdate: {
    command: 'bundle update'
  },
  bowerUpdate: {
    command: 'bower update'
  },
  getWP: {
    command: 'wget https://wordpress.org/latest.tar.gz && tar zxvf latest.tar.gz && mv wordpress <%= pkg.rootFolder %> && rm latest.tar.gz'
  }
}
