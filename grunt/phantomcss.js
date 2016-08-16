module.exports = {
  desktop: {
    options: {
      screenshots: "<%= config.testing.screenshots %>desktop",
      results: "<%= config.testing.results %>desktop",
      viewportSize: [ 1280, 800 ],
      mismatchTolerance: 0.05,
      rootUrl: "<%= config.devUrl %>",
    },
    src: [
      "<%= config.testing.base %><%= config.testing.visual %>**/*.js",
    ],
  },
  mobile: {
    options: {
      screenshots: "<%= config.testing.screenshots %>mobile",
      results: "<%= config.testing.results %>mobile",
      viewportSize: [ 320, 480 ],
      mismatchTolerance: 0.05,
      rootUrl: "<%= config.devUrl %>",
    },
    src: [
      "<%= config.testing.base %><%= config.testing.visual %>**/*.js",
    ],
  },

};
