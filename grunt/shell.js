module.exports = {
  bower: {
    command: 'bower install'
  },
  bowerUpdate: {
    command: 'bower update'
  },
  addChangelog: {
    command: 'git add CHANGELOG.md && git commit --amend --no-edit && git tag v<%= pkg.version %> -m "Version <%= pkg.version %>" && git push && git push --tags'
  },
  getWP: {
    command: 'wget https://wordpress.org/latest.tar.gz && tar zxvf latest.tar.gz && mv wordpress <%= pkg.rootFolder %> && rm latest.tar.gz'
  },
  getKeys: {
    command: 'curl https://api.wordpress.org/secret-key/1.1/salt/ > <%= config.srcFolders.secrets %>keys.php'
  }
}
