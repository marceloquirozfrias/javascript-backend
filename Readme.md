#NodeJs BackEnd Example

##Introduction

This repo contains an example of NodeJs BackEnd Restful Server.

## Purpose
The main goal is to learn how to build an simple token-based authentication and authorization mecanism with AngularJS and a RESTful api running on a Node.js server.

When a user sends his credentials, the Node.js server checks that they are correct and answers with a unique token built with the user informations.
The endpoint is restricted to authenticated users, the server checks the validity of the token and returns the data if the token is valid or a status error code.

## Prerequisites
Make sure you have installed all of the following prerequisites on your development machine:
* Node.js - [Download & Install Node.js](http://www.nodejs.org/download/) and the npm package manager.
* Nodemon - Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. Perfect for development. [Official Website](http://nodemon.io/).

```bash
$ npm install -g nodemon
```

## Application Requirements
* Express - Express is a lightweight platform for building web apps using NodeJS. It helps organize web apps on the server side: Router, Handling Requests, Application Settings, Middleware, etc. The best way to understand express is through its [Official Website](http://expressjs.com/).
* jwt-simple - jwt-simple is a module to generate, encode and decode, JSON Web Tokens.[Official Website](https://www.npmjs.com/package/jwt-simple).

## Setup the project

Download the project:

```bash
$ git init
```

```bash
$ git clone https://github.com/marceloquirozfrias/javascript-backend.git
```

All Node applications will start with a package.json file so let’s begin with that.

```bash
$ npm install
```

Then we need start the server:

```bash
$ nodemon server.js
```

If you need a client, I recommend the frontend part of this example:
[frontend] (https://github.com/marceloquirozfrias/javascript-frontend)

##Further Reading
* [Architecting a Secure RESTful Node.js app] (http://thejackalofjavascript.com/architecting-a-restful-node-js-app/)
* [AngularJs FrontEnd Single Page Application] (https://github.com/marceloquirozfrias/javascript-frontend)

