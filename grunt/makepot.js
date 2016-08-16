module.exports = {
  theme: {
    options: {
      cwd: "<%= destFolder %>",
      domainPath: "../../../../<%= config.srcFolders.languages %>",
      mainFile: "<%= destFolder %>style.css",
      potFilename: "<%= config.themeName %>.pot",
      potHeaders: {
        "language": "en",
        "plural-forms": "nplurals=2; plural=(n != 1);",
        "x-poedit-country": "Switzerland",
        "x-poedit-sourcecharset": "UTF-8",
        "x-poedit-keywordslist": true,
        "x-poedit-basepath": "../",
        "x-poedit-searchpath-0": ".",
        "x-poedit-bookmarks": "",
        "x-textdomain-support": "yes",
      },
      type: "wp-theme",
      updateTimestamp: true,
      updatePoFiles: true,
    },
  },
};
