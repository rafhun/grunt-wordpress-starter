module.exports = {
  themeName: {
    options: {
      questions: [
        {
          config: 'prompt.themeName',
          type: 'input',
          message: 'Theme Name: ',
          default: 'rafhun'
        },
        {
          config: 'prompt.rootFolder',
          type: 'input',
          message: 'Root Folder: ',
          default: 'wwwroot/',
          filter: function( value ) {
            var lastChar = value.substr( -1 );
            if ( lastChar !== '/' ) {
              value += '/';
            }

            return value;
          }
        },
        {
          config: 'prompt.locale',
          type: 'input',
          message: 'Default WordPress Locale: ',
          default: 'de_CH'
        }
      ]
    }
  }
}
