const chatgptService = require('../services/gpt.service');
const chatServices = require('../services/chat.service');
const chartService = require('../services/chart.service');
const tipranksService = require('../services/tiprank.service');
exports.askChatGPTForQuery = async (req, res) => {
    try {
        if (!req.body.prompt) {
            return res.status(400).json({ error: "Prompt is required" });
        }
        const prompt = req.body.prompt;
        const response = await chatgptService.getGPTResponse(prompt);
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getChats = async (req, res) => {
    try {
        if (!req.params.userId) {
            return res.status(400).json({ error: "invalid userId" });
        }
        const {userId} = req.params;
        const response = await chatServices.getChats(userId);
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.ask = async (req, res) => {
    try {
        if (!req.body.prompt) {
            return res.status(400).json({ error: "Prompt is required" });
        }
        const {prompt,user_id} = req.body;
         await chatServices.saveChat(user_id,"user",prompt);
        const response = await chatgptService.ask(user_id,prompt);
        const responseTicker = await chatgptService.askForTicker(user_id,prompt);
        await chatServices.saveChat(user_id,"assistant",response.toString());
        res.json({result:response,detail:responseTicker});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.askChatGPTForDrawChart = async (req, res) => {
    try {
        if (!req.body.prompt) {
            return res.status(400).json({ error: "Prompt is required" });
        }
        const prompt = req.body.prompt;
        const response = await chatgptService.getGPTResponse(prompt);
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.drawChart = async (req, res) => {
    try {

        const response = await chartService.drawChart();
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.singleStockDetail = async (req, res) => {
    try {

        const {stock}=req.body;
        const response = await tipranksService.getStockDetail(stock);
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
