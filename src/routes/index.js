const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const chatgptController = require('../controllers/gpt.controller');
const chatController = require('../controllers/chat.controller');

router.post('/ask',auth,chatgptController.ask);
router.get('/chat', auth,chatController.getChats);
router.get('/chat/:chatId',auth,chatController.getChatMessage);
router.post('/draw',auth,chatgptController.drawChart);
router.post('/detail',auth,chatgptController.singleStockDetail);

module.exports = router;
