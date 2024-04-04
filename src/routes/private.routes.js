
const express = require('express');
const router = express.Router();

const global = require('../config/global');

const telaHome = require('../controllers/home');
const addFriend = require('../controllers/addFriend.js'); 
const searchUser = require('../controllers/searchUser.js');


router.get(global.ROUTE.HOME, telaHome);

router.post(global.ROUTE.SEARCH_USER, searchUser);
router.post(global.ROUTE.ADD_FRIEND, addFriend);


module.exports = router;