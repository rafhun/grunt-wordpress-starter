module.exports = {
  options: { sourceMap: true },
  dist: {
    src: [
      "<%= bower_concat.all.dest.js %>",
      "<%= config.srcFolders.js %>plugins.es5.js",
      "<%= config.srcFolders.js %>plugins.js",
      "<%= config.srcFolders.jsMolecules %>**/*.js",
      "!<%= config.srcFolders.jsMolecules %>**/*.es6.js",
      "<%= config.srcFolders.js %>script.es5.js",
      "<%= config.srcFolders.js %>script.js",
    ],
    dest: "<%= destFolder %><%= config.buildFolders.js %>script.js",
  },
};
