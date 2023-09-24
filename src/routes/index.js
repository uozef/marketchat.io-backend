const express = require('express');
const router = express.Router();
const chatgptController = require('../controllers/gpt.controller');

router.post('/ask', chatgptController.askChatGPT);
router.post('/draw', chatgptController.drawChart);

module.exports = router;