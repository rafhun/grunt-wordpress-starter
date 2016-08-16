module.exports = {
  options: { sourceMap: true },
  dist: {
    files: [{
      expand: true,
      cwd: "<%= config.srcFolders.js %><%= config.srcFolders.jsBabel %>",
      src: ["**/*.js"],
      dest: "<%= config.srcFolders.jsBabelBuild %>",
      ext: ".js",
    }],
  },
};
