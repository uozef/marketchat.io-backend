const express = require('express');
const router = express.Router();
const chatgptController = require('../controllers/gpt.controller');

router.post('/ask', chatgptController.askChatGPTForQuery);
router.post('/draw', chatgptController.drawChart);

module.exports = router;