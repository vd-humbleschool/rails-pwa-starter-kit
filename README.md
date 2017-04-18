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
       
1. Create development and test databases, and modify the `/config/database.yml`
   file to suit. Then run:
   
       $ rake db:migrate
       
1. Create a `.env` file in the project root folder, with the following
   environment variables:
       
       AWS_ACCESS_KEY_ID=your-value-here
       AWS_SECRET_ACCESS_KEY=your-value-here
       AWS_REGION=your-value-here
       AWS_S3_BUCKET_NAME=your-value-here
       AWS_CF_KEY_PAIR_ID=your-value-here
       AWS_CF_PRIVATE_KEY=-----BEGIN RSA PRIVATE KEY-----\nyada\nyada\nyada\n-----END RSA PRIVATE KEY-----
       AWS_CF_DISTRIBUTION_ID=your-value-here
       
1. Install the `foreman` gem. We will need this gem to run the project.
   
       $ gem install foreman
       
1. Set up the client app for development (see `/client/README`)

## Running the Project

Running means starting both the server API (on port 5000) as well as the client 
app (on port 3000).

* To run the project:

      $ foreman start -p 3000 -f Procfile.dev

* To run Rails console:

      $ rails console
      
_NOTE: Rails console will not have access to the environment variables defined
in `.env`. If you want that Rails console should have access to them, run it as
follows: `foreman run rails console`._

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

## Deploying the Project

The server API and the client app are meant to be deployed separately.

Heroku is an option for deploying the server API.

1. Deploy the app on Heroku by following the first 4 steps (until `Deploy the
   App') outlined
   [here](https://devcenter.heroku.com/articles/getting-started-with-ruby)
2. Define environment variables (known as 'config vars' in Heroku):
    
   * All the environment variables mentioned above
   * The following additional environment variables:
     * `SECRET_KEY_BASE`: Use `rake secret` to generate a secret key if needed
     * `CLIENT_APP_BASE_URLS`: The base URL(s) at which the deployed client app
       is running. Generally, there will be just one.
       
_Note: If you run the Rails console on Heroku via `heroku run rails console`,
then unlike running the console locally, it will have access to the environment
variables (i.e. Heroku config vars) you have defined._
