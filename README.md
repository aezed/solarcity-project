SolarCity Coding Challenge
==========================

## Requirements
* Your application should accept a customer's name, age, address, and why they're interested in solar.
* Your application should save this information to a database of your choosing.

#### Full-Stack Application
Although demonstrating the full-stack, my application is slightly more front-end focused.

![alt text](./screenshot-solar-app.png "Screenshot")

## Technical Choices

### Back-End
##### Web Server/Routing
* Node.js
* Express
  * body-parser

I decided on Node/Express because I am most familiar with those tools, and they also allowed me to use the same language (JavaScript) on both the front and back-end. Body-parser is a middleware module for Express that simplifies handling HTTP request bodies.

##### Database/ORM
* MongoDB
* Mongoose

I went with MongoDB/Mongoose because the data weren't particularly relational and schema design is relatively simple and flexible.

### Front-End
##### MVC Framework
* AngularJS

Angular is a complete solution for handling MVC and RESTful actions. It requires little tooling or boilerplate, which is an advantage for such a simple application. I also appreciate its templating within HTML, allowing for direct manipulation and extension of the DOM tree. Since the application is so straightforward, the bugs sometimes caused by two-way data binding can be easily found.

I haven't worked much with Angular, but I found it pretty easy to pick up.

##### CSS Framework
* Materialize

I really appreciate the aesthetics of Google's Material Design. Materialize makes it easy to implement many Material Design cues in a simple, responsive grid system.

### Getting Started

First [install MongoDB](https://docs.mongodb.com/manual/installation/).

Then run MongoDB with
```
<path to binary>/mongod
```

### Installation
Download or clone git repository, then navigate to the directory where you cloned it.

Install Node dependencies and start the server with
```
npm install
npm start
```

When you see the terminal message
```
Listening on port 8080!
```
point your browser to `localhost:8080` to run the application.
