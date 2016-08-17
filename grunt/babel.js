module.exports = {
  options: { sourceMap: true },
  dist: {
    files: [{
      expand: true,
      cwd: "<%= config.srcFolders.js %>",
      src: ["**/*.es6.js"],
      dest: "<%= config.srcFolders.js %>",
      ext: ".es5.js",
    }],
  },
};
