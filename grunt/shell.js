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
  getWPold: {
    command: 'wget https://wordpress.org/latest.tar.gz && tar zxvf latest.tar.gz && mv wordpress <%= config.rootFolder %> && rm latest.tar.gz'
  },
  getWP: {
    command: 'sh getWP.sh <%= config.rootFolder %>'
  },
  getKeys: {
    command: 'sh getKeys.sh keys.php'
  },
  installPlugins: {
    command: 'composer self-update && composer install --no-dev'
  },
  updatePlugins: {
    command: 'composer self-update && composer update --no-dev'
  },
  updateUrl: {
    command: 'sed -i "" "s=<%= config.devUrl %>=http://${PWD##*/}.dev=g" Gruntconfig.yml'
  }
}
