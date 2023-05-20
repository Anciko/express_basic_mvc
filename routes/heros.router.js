const express = require('express');
const herosContoller = require('../controllers/heros.controller');

/**
 * The express.Router() function is used to create a new router object. This function is used when you want to create a new router object in your program to handle requests. 
 * Express Routers are a way to organize your Express application such that your primary app.js file does not become bloated and difficult to reason about. As you’re building an Express application or API, you’ll soon notice that the routes continue to pile up in app.js. This makes the file quite long and hard to read. As we add functionality to an application, this file would get long and cumbersome. The solution to this in Express is Routers. Routers are like mini versions of Express applications. They provide functionality for handling route matching, requests, and sending responses, but they do not start a separate server or listen on their own ports. Routers use all the .get(), .put(), .post(), and .delete() routes that you are now familiar with.
 */
const herosRouter = express.Router();

herosRouter.use((req, res, next) => {
    console.log('IP address: ', req.ip);
    next();
});

herosRouter.get('/', herosContoller.getHeros);
herosRouter.post('/', herosContoller.postHero);
// Get heros/22
herosRouter.get('/:heroId', herosContoller.getHero);

module.exports = herosRouter;