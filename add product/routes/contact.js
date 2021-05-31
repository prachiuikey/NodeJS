/*
const express = require('express');

const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/contact', (req,res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contact.html'));
});

module.exports = router;
*/

// After adding controllers

const express = require('express');

const path = require('path');

const contactControllers = require('../Controllers/contact');

const router = express.Router();

router.get('/contact', contactControllers.getContact);

module.exports = router;
