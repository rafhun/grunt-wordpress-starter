module.exports = {
  options: {
    changelogOpts: {

      // conventional-changelog options go here
      preset: "angular",
      // activate the following line to regenarate your changelog (in case some commits went missing from it), make sure to delete the contents of CHANGELOG.md before)
      // releaseCount: 0
    },
  },
  release: { src: "CHANGELOG.md" },
};
