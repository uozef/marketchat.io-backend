const express = require('express');
const router = express.Router();
const chatgptController = require('../controllers/gpt.controller');

router.post('/ask', chatgptController.ask);
router.get('/chats', chatgptController.getChats);
router.post('/draw', chatgptController.drawChart);
router.post('/detail', chatgptController.singleStockDetail);

module.exports = router;
