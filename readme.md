Version: 1.2.5

# Grunt Wordpress Starter

This framework's goal is to ease Wordpress theme development by making it available with some useful automation. It comes with preconfigured and easily adaptable Grunt tasks that make the most important development steps easier for you. The framework only needs a Node.js installation to work properly and includes tasks for Sass compiling, Javascript linting, concatenation and uglification but also for image optimization, icon creation as well as more administrative tasks such as an automated version bump and changelog generation. Also if you are working with a production and/or staging environment with SSH access you can easily deploy your builds through rsync.

Some additional documentation about the different tasks can be found in the [docs](https://github.com/rafhun/grunt-wordpress-starter/tree/master/docs) folder.

## Prerequisites

### Framework
As mentioned before the only dependency is a working Node.js installation on your system. Some secondary tasks concerned with the Wordpress setup process require `wget` or `curl`. Furthermore it is assumed that you are working on a Linux based system with a bash or similar shell (that can execute `.sh` scripts) and also that you track your progress with git.

### CMS / Server
Wordpress requires PHP and a MySQL database on your server. However if you are only concerned about styling and do not need to work on the CMS itself you can do that as the generated styleguide is a simple static site that you can access directly.

If you are running on Mac OS X there are many great tutorials about setting up a development environment, [this one](http://codepen.io/rafhun/blog/setting-up-a-devenv-on-a-mac) is recommended and reflected in the default config.

## Initialize a New Project

Adjust the `Gruntconfig.yml` file according to your personal preferences (also see "Folder Structure" below). Settings include the theme name you would like to use, as well as all source and destination paths you wish to use. When changing source paths make sure to adjust the sources coming with this project accordingly so you will not run into unexpected errors later on. You are completely free to remove everything in the `src/` folder and start your theme development from scratch. Once the `Gruntconfig.yml` is according to your wishes you are ready to set up the project.

Run

```
npm install
```

which in a first step pulls down all node dependencies defined in `package.json` and afterwards runs the setup script. This script will automatically create a `secrets.json` file for you (should it not yet exist) and ask for your ACF Pro Key. If you enter it, this will be copied to the `secrets.json` file, however if you do not possess a license for ACF Pro and do not enter a key, the dependency in `composer.json` will be changed to the basic version of the plugin. Next all Composer and Bower dependencies are downloaded and stored to their appropriate folders (WordPress Core is also managed through Composer).

### MySQL
After the installation it is recommended to set up your database and add the credentials to the `secrets.json` file, that was created for you in the above step. Do not forget to adjust the prefix according to your wishes.

### Secrets
All configuration data for your `wp-config.php` file should be put into the `secrets.json` file. This is ignored by Git by default to make sure you do not end up posting sensitive access data to your online repo. The basic boilerplate allows for the configuration of three different environments (local, staging, production), however this can easily be extended by adjusting the corresponding grunt tasks (esp. `grunt/replace.js`, `grunt/ftp_push.js` and `grunt/rsync.js`). Within this file you also have the opportunity to configure your SSH or FTP access for remote servers.

### Wordpress
You are now ready to start developing your theme. Just run

```
grunt
```

and everything will be set up for you. Should you wish to customize your theme's name or the basic folder setup you can edit the `Gruntconfig.yml` (see also the paragraph Folder Structure below).

NOTE: it is recommended to install WordPress from your local development URL not from the `localhost:3000` default BrowserSync address that will be opened when running the default grunt task. Therefore once the browser opens change the address to your local development URL and then do the famous 5-minute install.

## Folder Structure
The basic folder structure is defined respectively mirrored within `Gruntconfig.yml` file. All paths needed in grunt are defined therein to make it easy for you to adapt the structure to your needs. Folder paths within grunt configuration files are all given by referencing these variables so make sure you follow the given folder structure or change your `Gruntconfig.yml`.

To change your theme's name change `themeName` in `Gruntconfig.yml`. This automatically names your theme folder and adjusts your grunt paths. However make sure to define your final theme name before starting development as otherwise some absolute file paths in i. e. your CSS or PHP files might break, should they include the theme's name.

Requirements on your machine or virtual development environment:

* Node
* wget or curl (if you want to use the automatic Wordpress key generator)
* Composer

If you are working on OS X the use of Homebrew is strongly recommended. Follow [these instructions](http://brew.sh).

Node is needed for Grunt. Find out more about Grunt on the [official getting started guide](http://gruntjs.com/getting-started).
With Homebrew you can install node (which includes npm) by running `brew install node`.

## WordPress
The WordPress core files are managed through Composer. By default we auto update patch releases but need to manually update the minor version once we are ready to use it. This is also the way WordPress itself handles updates by default.

This boilerplate contains some very basic starter files to represent the workflow configured in `Gruntconfig.yml`. However you are not bound to these folder structures and can simply adjust them through the `Gruntconfig.yml` file. Also everything can be deleted and you can start from scratch if you wish.

The header in your `style.css` file that is required by WordPress can be adjusted in the `Gruntfile.js`. Make sure to add your relevant information there. A preset pulling data from the information in `package.json` is already implemented only some descriptive details need to be adjusted.

### Styles
For styling it is recommended to start with [this styles library](https://github.com/rafhun/styles-library), however you are free to add any sass files to the `src/scss` folder (resp. the one you defined in the `Gruntconfig.yml` file), just make sure to name the main import file `style.scss` or manually adjust the sass task accordingly. These files will be compiled and autoprefixed automatically. Then the header will be prepended to the resulting file which in a last step is minified. In your theme you should only import/use the minified CSS file while keeping the other one as a reference for WordPress.

External style dependencies can be controlled through Bower or NPM. Both default paths for these package managers (`/bower_components`, `/node_modules`) are included in the Sass task which lets you directly import dependencies (no need to move through the whole folder structure). See the already included libraries (`Susy`, `normalize-css`) for an example.

### PHP
A very barebones starter theme is set up in the PHP folder (by default `src/php`) which can be used to build upon. If you want to implement your own theme make sure to first check out the existing `header.php` file and copy over the grunticon loader, should you wish to use Grunticons.

To start on your own just copy all PHP files to the dedicated PHP folder and start editing.

### Javascript
Generally you should add JS dependencies through Bower if they are available. Simply add their name and version information to the `bower.json` file and then execute `grunt setupUpdate`. Add all other vendor scripts to the `plugins.js` file in the source scripts folder and your own to the `scripts.js` one. Should you have created molecules that depend on a certain script add this to the molecules folder within the JS one. Again you can find and adapt all relevant folder names in the `Gruntconfig.yml`.

## Deployment
For deployment two task are ready to be used depending on your server access. We provide automated grunt deployment through SSH and rsync (which is preferred) and alternatively a grunt deployment via FTP (should you not be able to get SSH access to your hosting). The boilerplate comes prepared for two different remote areas (staging and production) as well as one local one. However more can easily be added by extending/adjusting the relevant tasks.

### SSH Deployment
To deploy your site through SSH it is recommended to first set up your connection by adding your public SSH key to the authorized keys list on your server. This means that you will be able to connect to the server without having to provide the password manually for every connection. Set up your own keys (there are enough tutorials on that online) then run the following command:

```
cat ~/.ssh/id_rsa.pub | ssh user@hostname 'cat >> .ssh/authorized_keys'
```

As an alternative you can run `brew install copy-ssh-id` (requires Homebrew) which gives you access to the `ssh-copy-id` function (usage: `ssh-copy-id user@host`). This command basically does the same as the above.

## Custom Plugins/Themes
To work with custom plugins or themes you can save them to the respective folders defined in the Gruntconfig (defaults are `src/plugins` resp. `src/themes`). All folders and files within these folders will be copied to the respective WordPress folders. This is useful if you are working with your own or with premium plugins/themes, i. e. a starter theme or a premium plugin that is not available through composer. However the composer approach should always be preferred as it is a cleaner way of keeping your files.

## WP-CLI
If you are using the [WP-CLI](http://wp-cli.org/) there is a configuration file (`wp-cli.yml`) which points the WP-CLI to the installation folder.

## Root Folder Configuration
If you are not using or do not want to use `wwwroot/` as your destination folder unfortunately this has to be manually adjusted in the configuration files (easier solution pending). It is recommended that you use a find in project functionality to search and replace `wwwroot/`.

## Set Up the Repo
Comes down to personal preference, serve more as a personal reminder of ways to do this.

### Keep boilerplate reference

If you have access to Github Pro just fork the project to your account, then clone it to your machine.

Here is the way to set it up with Bitbucket. Clone this repo to your local machine:

```
git clone https://github.com/rafhun/grunt-wordpress-starter.git {project-name}
```

By default this adds the github remote as `origin`. We want to change this as we only keep the reference to the boilerplate. This can be done by running the following command from inside the repo you created with the clone (so do not forget to `cd` into it after cloning):

```
git remote rename origin boilerplate
```

### Wipe out boilerplate and its complete history

Clone the repo (see above) the enter into the folder and remove the `.git` folder (delete it in the finder or by staying in the command line: `rm -rf .git`). However make sure you are in the correct folder when running the above command!

Next you can initialize a new repo by running

```
git init
```

Make sure to adjust the version number and concrete project information in all relevant files (`bower.json`, `package.json`, `readme.md`), run `npm install`, add everything, then create your initial commit. Set up your online repo (for Bitbucket see below) and configure everything accordingly.

Then create a new repo on [Bitbucket](http://bitbucket.org/). Once done you can follow the instructions given on Bitbucket itself. Choose that you already have data and copy the commands given there. After this you should be set up to push and pull from the new origin remote that points to the Bitbucket repo.
