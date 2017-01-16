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
          validate: function( value ) {
            if ( value.length ) {
              return true;
            } else {
              return "This field is required. It is recommended to use the directory name.";
            }
          },
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
