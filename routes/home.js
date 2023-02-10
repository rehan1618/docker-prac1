const express = require('express');
const { homeGet, homePost } = require('../controllers/home');

const router = express.Router();

router.route('/').get(homeGet).post(homePost);

module.exports = router;
