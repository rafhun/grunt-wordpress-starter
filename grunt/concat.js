module.exports = {
  options: { sourceMap: true },
  dist: {
    src: [
      "<%= bower_concat.all.dest.js %>",
      "<%= config.srcFolders.js %>plugins.js",
      "<%= config.srcFolders.jsBabelBuild %>**/*.js",
      "<%= config.srcFolders.jsMolecules %>**/*.js",
      "<%= config.srcFolders.js %>script.js",
    ],
    dest: "<%= destFolder %><%= config.buildFolders.js %>script.js",
  },
};
