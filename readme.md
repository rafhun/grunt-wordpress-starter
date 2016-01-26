Version: 0.4.12

This framework's goal is to ease Wordpress theme development by making it available with some useful automation. It comes with preconfigured and easily adaptable Grunt tasks that make the most important development steps easier for you. The framework only needs a Node.js installation to work properly and includes tasks for Sass compiling, Javascript linting, concatenation and uglification but also for image optimization, icon creation as well as more administrative tasks such as an automated version bump and changelog generation. Also if you are working with a production and/or staging environment with SSH access you can easily deploy your builds through rsync.

## Prerequisites

### Framework
As mentioned before the only dependency is a working Node.js installation on your system. Some secondary tasks concerned with the Wordpress installation process require `wget` and `curl`. Furthermore it is assumed that you are working on a Linux based system with a bash or similar shell and also that you track your progress with git.

### CMS / Server
Wordpress requires PHP and a MySQL database on your server. However if you are only concerned about styling and do not need to work on the CMS itself you can do that as the generated styleguide is a simple static site that you can access directly.

If you are running on Mac OS X there are many great tutorials about setting up a development environment, [this one](http://codepen.io/rafhun/blog/setting-up-a-devenv-on-a-mac) is recommended.

### Set Up the Repo

#### Keep boilerplate reference

If you have access to Github Pro just fork the project to your account, then clone it to your machine.

Here is the way to set it up with Bitbucket. Clone this repo to your local machine:

```
git clone https://github.com/rafhun/wpbp.git {project-name}
```

By default this adds the github remote as `origin`. We want to change this as we only keep the reference to the boilerplate. This can be done by running the following command from inside the repo you created with the clone (so do not forget to `cd` into it after cloning):

```
git remote rename origin boilerplate
```

#### Wipe out boilerplate and its complete history

Clone the repo (see above) the enter into the folder and remove the `.git` folder (delete it in the finder or by staying in the command line: `rm -rf .git`). However make sure you are in the correct folder when running the above command!

Next you can initialize a new repo by running

```
git init
```

Make sure to adjust the version number and concrete project information in all relevant files (`bower.json, package.json, readme.md ), add everything, then create your initial commit. Set up your online repo (for Bitbucket see below) and configure everything accordingly.

Then create a new repo on [Bitbucket](http://bitbucket.org/). Once done you can follow the instructions given on Bitbucket itself. Choose that you already have data and copy the commands given there. After this you should be set up to push and pull from the new origin remote that points to the Bitbucket repo.

## Initialize a New Project

### Grunt Environment

Run

```
npm install
```

which pulls down all node modules that are defined as dependencies and puts them into the `node_modules` folder. This process might take a few minutes, so grab a drink and once the install is finished, make sure you do not have any error messages.

### MySQL
It is recommended to set up a database and its user before starting the Wordpress installation. To do this use your database administration tool of choice, access your MySQL server and create a new user with rights to only a new database dedicated to your Wordpress install. Make sure to remember your database name, database user name and password and best immediately put them down in your `secrets.json` file (see below).

### Secrets
All configuration data for your `wp-config.php` file should be put into the `secrets.json` file. This is gitignored by default to make sure you do not end up posting your sensitive access data to your online repo. To ease setting up the secrets file there is a `secrets-template.json` in the repo which you can fill out and then save as `secrets.json`. The basic boilerplate allows for the configuration of three different environments (local, staging, production), however this can easily be extended by adjusting the corresponding grunt tasks (esp. `grunt/replace.js`, `grunt/ftp_push.js` and `grunt/rsync.js`). Within this file you also have the opportunity to configure your SSH or FTP access for remote servers.

### Wordpress
Before proceeding with the Wordpress install make sure you have the database set up and have put the access details into your `secrets.json` file. If Grunt cannot find your secrets file it will not be able to run.

Now to set your whole project up run

```
grunt setup
```

which updates the Local Dev URL automatically, pulls down the latest version of Wordpress, untars it and then moves the downloaded files into your root folder.

To find out which dependencies are being pulled in check out the `bower.json` file. With the move to Sassdown and Libsass this project is now completely independent of Ruby which is why we are pulling in Susy through bower.

We also use Composer to pull in all of our plugins and themes. The above setup task installs some basic plugins that are used for most installations. Only install new plugins through the Composer file to make them part of our repo.

You are now ready to start developing your theme. Just run

```
grunt
```

and everything will be set up for you. Should you wish to customize your theme's name or the basic folder setup you can edit the `Gruntconfig.yml` (see also the paragraph Folder Structure below).

## Folder Structure
The basic folder structure is defined respectively mirrored within `Gruntconfig.yml` file. All paths needed in grunt are defined therein to make it easy for you to adapt the structure to your needs. Folder paths within grunt configuration files are all given by referencing these variables so make sure you follow the given folder structure or change your `Gruntconfig.yml`.

To change your themes name change `themeName` in `Gruntconfig.yml`. This automatically names your theme folder and adjusts your grunt paths. However make sure to define your final theme name before starting development as otherwise some absolute file paths in i. e. your CSS or PHP files might break, should they include the theme's name.

Requirements on your machine or virtual development environment:

* Node
    - grunt-cli
* wget or curl (if you want to use the automatic Wordpress downloader)
* Composer

If you are working on OS X the use of Homebrew is strongly recommended. Follow [these instructions](http://brew.sh).

Node is needed for Grunt. Find out more about Grunt on the [official getting started guide](http://gruntjs.com/getting-started). The grunt-cli must be installed globally all other npm modules are downloaded locally.
With Homebrew you can install node (npm is included) by running `brew install node`.

## Wordpress
This boilerplate starts completely from scratch. No files are in the relevant `src` folders to allow you a complete fresh start. Eventually we might include a starter theme for you to use though.

The header in your `style.css` file that is required by WordPress can be adjusted in the `Gruntfile.js`. Make sure to add your relevant information there.

### Styles
For styling it is recommended to start with [this styles library](https://github.com/rafhun/styles-library), however you are free to add any sass files to the `src/scss` folder (resp. the one you defined in the `Gruntconfig.yml` file), just make sure to name the main import file `style.scss` or manually adjust the sass task accordingly. These files will be compiled and autoprefixed automatically. Then the header will be prepended to the resulting file which then also is minified. In your theme you should only import/use the minified CSS file while keeping the other one as a reference for your WordPress.

### PHP
To start with we recommend the Underscores starter theme. Copy all PHP files that are delievered to you to the `src/php` (or the one you defined in `Gruntconfig.yml`) folder. With this you are ready to activate the theme and start development on it.

### Javascript
Add all vendor scripts to the `plugins.js` file in the source scripts folder and your own to the `scripts.js` one. Should you have created molecules that depend on a certain script add this to the molecules folder within the JS one. Again you can find and adapt all relevant folder names in the `Gruntconfig.yml`.

## Deployment
For deployment two task are ready to be used depending on your server access. We provide automated grunt deployment through SSH and rsync (which is preferred) and alternatively a grunt deployment via FTP (should you not be able to get SSH access to your hosting). The boilerplate comes prepared for two different remote areas (staging and production) as well as one local one. However more can easily be added by extending/adjusting the relevant tasks.

### SSH Deployment
To deploy your site through SSH it is recommended to first set up your connection by adding your public SSH key to the authorized keys list on your server. This means that you will be able to connect to the server without having to provide the password manually for every connection. Set up your own keys (there are enough tutorials on that online) then run the following command:

```
cat ~/.ssh/id_rsa.pub | ssh user@hostname 'cat >> .ssh/authorized_keys'
```

As an alternative you can run `brew install copy-ssh-id` (requires Homebrew) which gives you access to the `ssh-copy-id` function (usage: `ssh-copy-id user@host`). This command basically does the same as the above command.

## Custom Plugins/Themes
To work with custom plugins or themes you can save them to the respective folders defined in the Gruntconfig (defaults are `src/plugins` resp. `src/themes`). All folders and files within these folders will be copied to the respective WordPress folders. This is useful if you are working with your own or with premium plugins/themes, i. e. a starter theme or a premium plugin that is not available through composer. However the composer approach should always be preferred as it is a cleaner way of keeping your files.
