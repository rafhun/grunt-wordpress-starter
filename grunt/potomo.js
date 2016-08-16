module.exports = {
  dist: {
    options: { poDel: false },
    files: [{
      expand: true,
      cwd: "<%= config.srcFolders.languages %>",
      src: ["*.po"],
      dest: "<%= config.srcFolders.languages %>",
      ext: ".mo",
      nonull: true,
    }],
  },
};
