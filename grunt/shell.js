module.exports = {
  bower: 'bower install',
  bowerUpdate: 'bower update',
  addChangelog: 'git add CHANGELOG.md && git commit --amend --no-edit && git tag v<%= pkg.version %> -m "Version <%= pkg.version %>" && git push && git push --tags',
  getWP: 'sh getWP.sh <%= config.rootFolder %>',
  getKeys: 'sh getKeys.sh keys.php',
  installPlugins: 'composer self-update && composer install --no-dev',
  updatePlugins: 'composer self-update && composer update --no-dev',
  updateUrl: 'sed -i "" "s=<%= config.devUrl %>=http://${PWD##*/}.dev=g" Gruntconfig.yml'
}
