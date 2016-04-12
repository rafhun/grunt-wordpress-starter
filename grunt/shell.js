module.exports = {
  addChangelog: 'git add CHANGELOG.md && git commit --amend --no-edit && git tag v<%= pkg.version %> -m "Version <%= pkg.version %>" && git push && git push --tags',
  bower: 'bower install',
  bowerUpdate: 'bower update',
  composer: 'composer self-update && composer install --no-dev',
  composerUpdate: 'composer self-update && composer update --no-dev',
  dbLocal2Stage: 'wp search-replace "<%= secrets.local.root %>" "<%= secrets.staging.root %>" --network && wp search-replace "<%= secrets.local.url %>" "<%= secrets.staging.url %>" --network --export=<%= config.dbDump %>local2stage-<%= grunt.template.today( "YYYYMMDD-hhmmss").sql && wp search-replace "<%= secrets.staging.root %>" "<%= secrets.local.root %>" --network',
  dbLocal2Live: 'wp search-replace "<%= secrets.local.root %>" "<%= secrets.production.root %>" --network && wp search-replace "<%= secrets.local.url %>" "<%= secrets.production.url %>" --network --export=<%= config.dbDump %>local2live-<%= grunt.template.today( "YYYYMMDD-hhmmss").sql && wp search-replace "<%= secrets.production.root %>" "<%= secrets.local.root %>" --network',
  getKeys: 'sh getKeys.sh keys.php',
  updateRootPath: 'sed -i "" "s=wwwroot/=<%= config.rootFolder %>=g" composer.json wp-cli.yml .gitignore secrets.json secrets-template.json',
  updateSecretsRoot: 'sed -i "" "s=/www/sites/grunt-wordpress-starter=${PWD}=g" secrets.json secrets-template.json',
  updateUrl: 'sed -i "" "s=<%= config.devUrl %>=http://${PWD##*/}.dev/=g" Gruntconfig.yml'
}
