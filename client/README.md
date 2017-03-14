# README

This is the README for the React client app fronting the Rails API.

This project was bootstrapped with
[Create React App](https://github.com/facebookincubator/create-react-app).

Though this app code forms a part of the entire project, it is very much a
standalone app. The contents of this folder can easily be copied elsewhere and
developed separately with no consequences.

## Deployment

This client app is meant to be deployed separately from the backend API, on a
static file server. Follow these steps:

### Step 1: Build the App

Make sure you are in the `<project-root>/client` directory on your terminal.

Next, Create React App says to run the `build` npm script, but we provide a
slightly different approach. The problem with the standard method is that the
built app gets the environment values defined in the `.env` file, which is
exactly what the dev server uses too! Ideally, you would like to define a
different set of values for production. So, we provide two custom npm scripts:

* `build:deploy` - This reads environment values from `'env.deploy`
* `build:local` - This reads environment values from `.env.local`

Why two? Well, the `deploy` script should be used to build a deployment ready
app. The `local` script on the other hand, should be used if you need to test
a built app on your local machine (against a locally running backend API) via
the `pushstate-server build` command.

The regular `build` script still works, but you don't need to use it.

**IMPORTANT**: Whichever build script you use, be aware that the built code gets
generated into the same `/build` folder in each case!

So, to build a deployment ready app, do

    $ npm run build:deploy

## Step 2: Deploy the Built App

Deploying can be as simple as copying the contents of the `/build` folder to an
appropriate location from where they can be served.
