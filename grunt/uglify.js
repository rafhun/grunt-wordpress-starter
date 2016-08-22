module.exports = {
  options: {
    sourceMap: true,
    sourceMapIncludeSources: true,
    sourceMapIn: "<%= concat.dist.dest %>.map",
    preserveComments: false,
    screwIE8: true,
  },
  build: {
    files: [{
      expand: true,
      flatten: true,
      src: [
        "<%= concat.dist.dest %>",
        "<%= config.srcFolders.jsNoConcat %>**/*.js",
        "!<%= config.srcFolders.jsNoConcat %>**/*.es6.js",
      ],
      dest: "<%= destFolder %><%= config.buildFolders.js %>",
      ext: ".min.js",
    }],
  },
};
