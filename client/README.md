# README

This is the README for the React client app fronting the Rails API.

This project was bootstrapped with
[Create React App](https://github.com/facebookincubator/create-react-app).

Though the code in this folder forms a part of the entire project, it is very 
much a standalone app. This folder's contents can easily be moved elsewhere and
developed separately with no consequences.

## Setting Up for Development

1. In a terminal window, go to the client app root folder (which is
   `<project-root>/client` unless you move the client app elsewhere).

   _NOTE: In future, take this last sentence as a precondition to be met to run
   any client app related console commands, unless otherwise stated._

   Then:
   
       $ yarn install
       
1. Create a `.env` file in the client app root folder, with the following 
   environment variables:
   
       REACT_APP_API_BASE_URL=for-example-http://localhost:5000

## Building the App

Create React App says to run the `build` script defined in the `package.json` 
file, but we provide a slightly different approach.

The problem with the standard `build` script is that it injects into the built
app the environment variable values specified in the `.env` file. However, this
is the very same file used by the **dev** server too! Ideally, we would need to 
specify a different set of values for production.

For this, we provide a custom `build:deploy` script which reads environment 
values from `.env.deploy`.

The regular `build` script still works, and can be used for running locally, to 
test PWA features; these cannot be tested without building the app.

**IMPORTANT**: Whichever build script you use, be aware that the built code gets
generated into the same `/build` folder in each case!

To build a deployment ready app:

1. Create `.env.deploy` and provide desired values for environment variables
1. `$ yarn run build:deploy`

## Deploying the App

This client app is meant to be deployed separately from the backend API, on a
static file server. Deploying can be as simple as copying the contents of the 
`/build` folder to an appropriate location from where they can be served.

S3 is an option for deploying the app. We also recommend pairing it with a CDN,
like CloudFront, for best results.

1. Set up your S3 bucket and CloudFront distribution first. See 
   [this article](https://medium.com/@omgwtfmarc/deploying-create-react-app-to-s3-or-cloudfront-48dae4ce0af)
   for help on doing so.

1. Once set up, you can of course manually deploy. However, we provide a 
   convenient shell script (`/scripts/deploy-aws.sh`) for this purpose. To use 
   the script, you will need to set up AWS CLI on your machine.

   **IMPORTANT**: Make sure the user signed in to the CLI has the permission to:
   * Upload and delete files on your S3 bucket
   * Create invalidations on your CloudFront distribution

   Then:

       $ cd scripts && sh deploy-aws.sh

## React/JSX Coding Style

We follow
[AirBnB's coding style](https://github.com/airbnb/javascript/blob/master/react/README.md),
with the following exceptions:

1. We don't use the `.jsx` extension; we stick to plain old `.js`
