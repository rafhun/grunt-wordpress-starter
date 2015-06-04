module.exports = {
  options: {
    files: ['package.json', 'bower.json', 'readme.md'],
    updateConfigs: ['pkg'],
    commit: true,
    commitMessage: 'Release v%VERSION%',
    commitFiles: ['package.json', 'bower.json', 'readme.md'],
    createTag: true,
    tagName: 'v%VERSION%',
    tagMessage: 'Version %VERSION%',
    push: true,
    pushTo: 'origin',
    gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
    globalReplace: false,
    prereleaseName: false,
    regExp: false
  }
}
