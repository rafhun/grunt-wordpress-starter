module.exports = {
  themeName: {
    options: {
      questions: [
        {
          config: "prompt.themeName",
          type: "input",
          message: "Theme Name: ",
          default: "werbelinie",
        },
        {
          config: "prompt.dockerName",
          type: "input",
          message: "Docker Name (just one word, no spaces, dashes, underscores etc allowed): ",
          default: "werbelinie",
        },
        {
          config: "prompt.rootFolder",
          type: "input",
          message: "Root Folder: ",
          default: "wwwroot/",
          filter: function( value ) {
            var lastChar = value.substr( -1 );

            if ( lastChar !== "/" ) {
              value += "/";
            }

            return value;
          },
        },
        {
          config: "prompt.locale",
          type: "input",
          message: "Default WordPress Locale: ",
          default: "de_CH",
        },
      ],
    },
  },
};
