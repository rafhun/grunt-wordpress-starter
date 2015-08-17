module.exports = {
  options: {
    changelogOpts: {
      // conventional-changelog options go here
      preset: 'angular',
      // activate the following line to regenarate your changelog (in case some commits went missing from it), make sure to delete the contents of CHANGELOG.md before)
      // releaseCount: 0
    },
    context: {
      // context goes here
    },
    gitRawCommitsOpts: {
      // git-raw-commits options go here
    },
    parserOpts: {
      // conventional-commits-parser options go here
    },
    writerOpts: {
      // conventional-changelog-writer options go here
    }
  },
  release: {
    src: 'CHANGELOG.md'
  }
}
