module.exports = {
  options: {
    cache: true,
    fix: true,
  },
  target: [
    "Gruntfile.js",
    "grunt/*.js",
    "<%= config.srcFolders.jsMolecules %>**/*.js",
    "<%= config.srcFolders.js %>script.j",
  ],
};
