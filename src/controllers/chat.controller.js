const chatServices = require('../services/chat.service');

exports.getChats = async (req, res) => {
    try {
        const {userId} = req;
        if (!userId) {
            return res.status(400).json({ error: "invalid userId" });
        }
        const response = await chatServices.getChats(userId);
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getChatMessage = async (req, res) => {
    try {
        if (!req.params.chatId) {
            return res.status(400).json({ error: "invalid chatId" });
        }
        const {userId}=req;
        const {chatId}=req.params;
        const response = await chatServices.getChatMessages(chatId);
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
