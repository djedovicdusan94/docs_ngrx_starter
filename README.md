[Setup and install](#setup-and-install) | [Tasks](#tasks) |
[Resources](#resources)

## Setup and install

Fork this repo from inside GitHub so you can commit directly to your account, or
simply download the `.zip` bundle with the contents inside.

#### Dependency installation

During the time building this project, you'll need development dependencies of
which run on Node.js, follow the steps below for setting everything up (if you
have some of these already, skip to the next step where appropriate):

1. Download and install [Node.js here](https://nodejs.org/en/download/) for
   Windows or for Mac.

That's about it for tooling you'll need to run the project, let's move onto the
project install.

#### Project installation and server

Now you've pulled down the repo and have everything setup, using the terminal
you'll need to `cd` into the directory that you cloned the repo into and run
some quick tasks:

```
cd <ngrx-store-effects-app>
yarn install
# OR
npm install
```

This will then setup all the development and production dependencies we need.

Now simply run this to boot up the server:

```
yarn start
# OR
npm start
```

Visit `localhost:3000` to start building.

## Tasks

A quick reminder of all tasks available:

#### Development server

```
yarn start
# OR
npm start
```

## Resources

There are several resources used inside this project, of which you can read
further about to dive deeper or understand in more detail what they are:

* [Angular](https://angular.io)
* [ngrx/store](https://github.com/ngrx/platform/blob/master/docs/store/README.md)
  docs
* [ngrx/effects](https://github.com/ngrx/platform/blob/master/docs/effects/README.md)
  docs
* [npm](https://www.npmjs.com/)
* [Webpack](https://webpack.js.org/)
