# Plugins

The plugins are mostly managed through Composer, meaning you have to add them as dependencies to the `composer.json` file. There are a lot of development plugins referenced there which should only be used in development environments. Therefore make sure to deactivate these plugins once you move to your live environment. Only keep them active on your local and staging server to ease testing of your theme.

If you have any premium plugins, have written your own or are using one that is not available through wpackagist.org there is a `src/plugins` folder (exact name configurable in `Gruntconfig.yml`) which gets copied over to the plugins folder in the destination. Put any of those plugins in there.
