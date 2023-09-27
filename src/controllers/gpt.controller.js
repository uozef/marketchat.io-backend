const chatgptService = require('../services/gpt.service');
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
