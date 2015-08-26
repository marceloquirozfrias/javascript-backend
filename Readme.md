#NodeJs BackEnd Example

##Introduction

This repo contains an example of NodeJs BackEnd Restful Server.

## Purpose
The main goal is to learn how to build an simple token-based authentication and authorization mecanism with AngularJS and a RESTful api running on a Node.js server.

When a user sends his credentials, the Node.js server checks that they are correct and answers with a unique token built with the user informations.
The endpoint is restricted to authenticated users, the server checks the validity of the token and returns the data if the token is valid or a status error code.

## Prerequisites
Make sure you have installed all of the following prerequisites on your development machine:
* Node.js - [Download & Install Node.js](http://www.nodejs.org/download/) and the npm package manager. If you encounter any problems, you can also use this [GitHub Gist](https://gist.github.com/isaacs/579814) to install Node.js.
* Express - Express is a lightweight platform for building web apps using NodeJS. It helps organize web apps on the server side: Router, Handling Requests, Application Settings, Middleware, etc. The best way to understand express is through its [Official Website](http://expressjs.com/).

```bash
$ npm install express
```
* jwt-simple - jwt-simple is a module to generate, encode and decode, JSON Web Tokens.[Official Website](https://www.npmjs.com/package/jwt-simple).

## Setup the project



##Further Reading
### BackEnd:
* [Architecting a Secure RESTful Node.js app] (http://thejackalofjavascript.com/architecting-a-restful-node-js-app/)

> **Note:**
> This example to be continued ...
