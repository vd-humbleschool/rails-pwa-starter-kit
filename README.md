# README

This is the README for the Rails API backing the React client app. The client 
app code resides in the `/client` folder.

## Setting Up for Development

1. Configure the Ruby version in `Gemfile`. We recommend 2.4.0 at a minimum.
1. If you use RVM or some other Ruby version manager, optionally create these 
   files for auto-selecting the correct Ruby and gemset locally. We *strongly*
   advise this! Learn more at https://rvm.io/workflow/projects.
   
     * `.ruby-version`
     * `.ruby-gemset`
     
1. In a terminal window, go to the project root folder. Make sure the correct
   Ruby and gemset are being used (if you did the above step, you should be ok
   to go). 
   
   _NOTE: In future, take the last two sentences as preconditions to be met to
   run any Rails related console commands, unless otherwise stated!_
   
   Then:
   
       $ gem install bundler
       $ bundle install
   
   You may face an issue with the installation of the 'pg' gem. The workaround
   depends on your OS and method of installing Postgres. On macOS Sierra, with
   Postgres installed via Postgres.app, this should fix it:
   
       $ gem install pg -- --with-pg-config=/Applications/Postgres.app/Contents/Versions/Latest/bin/pg_config
       
   Once fixed, run `bundle install` again.
       
1. Install the `foreman` gem. We will need this gem to run the project, and to
   run other `rake ...` and `rails ...` commands that rely on the existence of
   any environment variables defined in the `.env` file below.
   
       $ gem install foreman
       
1. Create a `.env` file in the project root folder, with the following 
   environment variables:

       SECRET_KEY_BASE=your-value-here
       CLIENT_APP_BASE_URLS=http://localhost:3000,http://localhost:9000
       AWS_ACCESS_KEY_ID=your-value-here
       AWS_SECRET_ACCESS_KEY=your-value-here
       AWS_REGION=your-value-here
       AWS_S3_BUCKET_NAME=your-value-here
       AWS_CF_KEY_PAIR_ID=your-value-here
       AWS_CF_PRIVATE_KEY=-----BEGIN RSA PRIVATE KEY-----\nyada\nyada\nyada\n-----END RSA PRIVATE KEY-----
       AWS_CF_DISTRIBUTION_ID=your-value-here
       
1. Create development and test databases, and modify the `/config/database.yml`
   file to suit. Then run:
   
       $ foreman run rake db:migrate
       
1. Set up the client app for development (see `/client/README`)

## Running the Project

Running means starting both the server API (on port 3001) as well as the client 
app (on port 3000).

* To run the project:

      $ foreman start -p 3000 -f Procfile.dev

* To run Rails console:

      $ foreman run rails console

If you are using RubyMine, create a run configuration for the app to be able to
use the IDE for running and debugging:

1. 'Run' menu -> Edit Configurations -> '+' -> Gem Command
1. Enter the following:
   * Name: Foreman Dev
   * Gem name: foreman
   * Executable name: foreman
   * Arguments: start -p 3000 -f Procfile.dev
   
_NOTE: If you move the client app elsewhere (see `/client/README` for details), 
then the instructions above do not hold. Do the following instead:_

1. Run the **API only** with `foreman start`
1. Run the client app separately (see `/client/README`)
