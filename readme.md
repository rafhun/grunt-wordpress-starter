Version: 0.1.3

This framework's goal is to ease Wordpress theme development by making it available with some useful automation. It comes with preconfigured and easily adaptable Grunt tasks that make the most important development steps easier for you. The framework only needs a Node.js installation to work properly and includes tasks for Sass compiling, Javascript linting, concatenation and uglification but also for image optimization, icon creation as well as more administrative tasks such as an automated version bump and changelog generation. Also if you are working with a production and/or staging environment with SSH access you can easily deploy your builds through rsync.

## Prerequisites

### Framework
As mentioned before the only dependency is a working Node.js installation on your system. Some secondary tasks concerned with the Wordpress installation process require `wget`. Furthermore it is assumed that you are working on a Linux based system with a bash or similar shell and also that you track your progress with git.

### CMS / Server
Wordpress requires PHP and a MySQL database on your server. However if you are only concerned about styling and do not need to work on the CMS itself you can do that as the generated styleguide is a simple static site that you can access directly.

If you are running on Mac OS X there are many great tutorials about setting up a development environment, [this one](http://codepen.io/rafhun/blog/setting-up-a-devenv-on-a-mac) is recommended.

### Set Up the Repo

If you have access to Github Pro just fork the project to your account, then clone it to your machine.

Here is the way to set it up with Bitbucket. Clone this repo to your local machine:

```
git clone https://github.com/rafhun/wpbp.git {project-name}
```

By default this adds the github remote as `origin`. We want to change this as we only keep the reference to the boilerplate. This can be done by running the following command from inside the repo you created with the clone (so do not forget to `cd` into it after cloning):

```
git remote rename origin boilerplate
```

Then create a new repo on [Bitbucket](http://bitbucket.org/). Once done you can follow the instructions given on Bitbucket itself. Choose that you already have data and copy the commands given there. After this you should be set up to push and pull from the new origin remote that points to the Bitbucket repo.

## Initialize a New Project

### Grunt Environment
As a first step that otherwise might easily be forgotten open your `Gruntconfig.yml` file and adjust the value for `devUrl` to your development URL.

Now you can run

```
npm install
```

which pulls down all node modules that are defined as dependencies and puts them into the `node_modules` folder. This process might take a few minutes, so grab a drink and once the install is finished, make sure you do not have any error messages.

### MySQL
It is recommended to set up a database and its user before starting the Wordpress installation. To do this use your database administration tool of choice, access your MySQL server and create a new user with rights to only a new database dedicated to your Wordpress install. Make sure to remember your database name, database user name and password and best immediately put them down in your `secrets.json` file (see below).

### Secrets
All configuration data for your `wp-config.php` file should be put into the `secrets.json` file. This is gitignored by default to make sure you do not end up posting your critical access data to your online repo. To ease setting up the secrets file there is a `secrets-template.json` in the repo which you can fill out and then save as `secrets.json`. The basic boilerplate allows for the configuration of three different environments (local, staging, production), however this can easily be extended by adjusting the corresponding grunt tasks (esp. `grunt/replace.js` and `grunt/rsync.js`). Within this file you also have the opportunity to configure your SSH access for remote servers.

### Wordpress
Before proceeding with the Wordpress install make sure you have the database set up and have put the access details into your `secrets.json` file. If Grunt cannot find your secrets file it will not be able to run.

Now to automate your Wordpress install run

```
grunt getWP
```

which pulls down the latest version of Wordpress, untars it and then moves the downloaded files into your root folder.

As soon as the task is done you can call up your local server and follow the instructions to install Wordpress. Now you are ready to start developing the next great theme.

### Theme Development Dependencies
After successfully setting everything up you are now ready to start development. As the framework is based on Susy and offers jQuery support we need to install some more dependencies. This can be done by running

```
grunt setup
```

To find out which dependencies are being pulled in check out the `bower.json` file. With the move to Sassdown and Libsass this project is now completely independent of Ruby which is why we are pulling in Susy through bower. You are now ready to start developing your theme. Just run

```
grunt
```

and everything will be set up for you. Should you wish to customize your theme's name or the basic folder setup you can edit the `Gruntconfig.yml` (see also the paragraph Folder Structure below).

## Folder Structure
The basic folder structure is defined respectively mirrored within `Gruntconfig.yml` file. All paths needed in grunt are defined therein to make it easy for you to adapt the structure to your needs. Folder paths within grunt configuration files are all given by referencing these variables so make sure you follow the given folder structure or change your `Gruntconfig.yml`.

To change your themes name change `themeName` in `Gruntconfig.yml`. This automatically names your theme folder and adjusts your grunt paths. However make sure to define your final theme name before starting development as otherwise some absolute file paths in i. e. your CSS or PHP files might break, should they include the theme's name.

Requirements on your machine or virtual development environment:

* Ruby
    - Bundler
* Node
    - grunt-cli
* wget (if you want to use the automatic Wordpress downloader)

If you are working on OS X the use of Homebrew is strongly recommended. Follow [these instructions](http://brew.sh).

Node is needed for Grunt. Find out more about Grunt on the [official getting started guide](http://gruntjs.com/getting-started). The grunt-cli must be installed globally all other npm modules are downloaded locally.
With Homebrew you can install node (npm is included) by running `brew install node`.

Ruby is needed for Sass and Susy as well as the styleguide generator Hologram. It is not recommended to use the system ruby for your projects. Use rbenv or rvm to manage your ruby versions. You can install rbenv through Homebrew by running `brew install rbenv`.
Bundler is used to manage the versions of your gems. To install it run `gem install bundler`. Find out more about bundler [on their website](http://bundler.io).

A grunt task has been configured that automatically donwloads the latest wordpress version, untars it and deletes the downloaded archive. You can use this task to setup a new Wordpress installation or everytime you want to compile a fresh, clean install. Be careful though as this wipes out your whole webroot folder (in this case `wwwroot`) including all plugins.

@TODO: automatically copy downloaded plugin files to the src folder before wiping out the webroot.

If you want to use this task you need to install wget by running `brew install wget` since the file is downloaded through it.
