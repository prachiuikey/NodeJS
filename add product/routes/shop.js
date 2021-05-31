/*
const path = require('path');

const rootDir = require('../util/path');

const express = require('express');

const router = express.Router();

router.get('/',(req, res, next) => {
    res.sendFile(path.join(rootDir,'views','shop.html')) ;
});


module.exports = router;
*/

const path = require('path');

const productControllers = require('../Controllers/Products');

const express = require('express');

const router = express.Router();

router.get('/', productControllers.addProducts);

module.exports = router;
