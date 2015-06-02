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
  hologram: {
    command: 'bundle exec hologram <%= pkg.hologramConfig %>'
  },
  getWP: {
    command: 'wget https://wordpress.org/latest.tar.gz && tar zxvf latest.tar.gz && mv wordpress <%= pkg.rootFolder %> && rm latest.tar.gz'
  },
  getKeys: {
    command: 'curl https://api.wordpress.org/secret-key/1.1/salt/ > keys.php'
  }
}
