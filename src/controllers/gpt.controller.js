const chatgptService = require('../services/gpt.service');

exports.askChatGPT = async (req, res) => {
    try {
        if (!req.body.prompt) {
            return res.status(400).json({ error: "Prompt is required" });
        }
        const prompt = req.body.prompt;
        const response = await chatgptService.getChatGPTResponse(prompt);
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
