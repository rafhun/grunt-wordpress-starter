# Standalone Scripts
Use this folder if you need to keep certain script files from concatenation but still want to use them in your frontend. This makes sense for scripts you manually enqueue only for very few pages in your WordPress. I. e. if you have something like a contact form validation script that you do not need anywhere else on the page and you know that not too many people visit your contact page you might want to keep the script out of your main script file to lower that file's size and instead only enqueue it on the contact page itself. Adding a little bit of load time to that page but keeping the main scripts file a little smaller. Figure out what makes the most sense to you.

The files in this folder undergo the same treatment as other files except for the concatenation. I. e. add the `.es6.js` extension, for the files to be compiled with Babel. The files will be uglified and saved to the JS destination folder configured through `Gruntconfig.yml`.

**Important**

Enqueue these standalone scripts in the `src/php/functions.php` file to ensure that the hash will be applied to the source code correctly. If this should not be possible or practical, add the file in which you enqueue the script to the `grunt/hashres.js` file.

Also remember that all files are saved with the extension `.min.js` meaning the ES6 hint in the filename will be stripped out. Thus to enqueue the `test.es6.js` file correctly, reference it as `test.min.js`.
