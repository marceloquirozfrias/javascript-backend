var express = require('express');
var router = express.Router();

var auth = require('./auth.js');
var products = require('./products.js');
var user = require('./users.js');

/*
 * Routes that can be accessed by any one
 */
router.post('/login', auth.login);


/*
 * Routes that can be accessed only by autheticated users
 */
router.get('/crud/products', products.getAll);
router.get('/crud/product/:id', products.getOne);
router.post('/crud/', products.create);
router.put('/crud/product/:id', products.update);
router.delete('/crud/product/:id', products.delete);

/*
 * Routes that can be accessed only by authenticated & authorized users
 */
router.get('/crud/users', user.getAll);
router.get('/crud/user/:id', user.getOne);
router.post('/crud/user/', user.create);
router.put('/crud/:id', user.update);
router.delete('/crud/user/:id', user.delete);

module.exports = router;
