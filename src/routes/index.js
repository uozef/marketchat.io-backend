const express = require('express');
const router = express.Router();
const chatgptController = require('../controllers/gpt.controller');

router.post('/ask', chatgptController.askChatGPT);

module.exports = router;