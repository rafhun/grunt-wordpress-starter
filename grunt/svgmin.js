module.exports = {
  options: {
    plugins: [
      { removeViewBox: false }, { sortAttrs: true },
    ],
  },
  dist: {
    files: [{
      expand: true,
      cwd: "<%= config.srcFolders.icons %>",
      src: ["*.svg"],
      dest: "<%= config.srcFolders.iconsMin %>",
    }],
  },
};
