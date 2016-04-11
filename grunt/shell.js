module.exports = {
  addChangelog: 'git add CHANGELOG.md && git commit --amend --no-edit && git tag v<%= pkg.version %> -m "Version <%= pkg.version %>" && git push && git push --tags',
  bower: 'bower install',
  bowerUpdate: 'bower update',
  composer: 'composer self-update && composer install --no-dev',
  composerUpdate: 'composer self-update && composer update --no-dev',
  getKeys: 'sh getKeys.sh keys.php',
  updateRootPath: 'sed -i "" "s=wwwroot/=<%= config.rootFolder %>=g" composer.json wp-cli.yml .gitignore',
  updateUrl: 'sed -i "" "s=<%= config.devUrl %>=http://${PWD##*/}.dev/=g" Gruntconfig.yml'
}
