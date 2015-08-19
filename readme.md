Version: 0.1.0

This project is still under heavy development, so basically almost nothing is working yet.


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
