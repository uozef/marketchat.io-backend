const OPENAI_API_BASE_URL = 'https://api.openai.com/v1/engines';
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const CHATGPT_MODEL = process.env.CHATGPT_MODEL || 'davinci'; // default to 'davinci' if no model is specified in .env
const axios = require('axios');
exports.getChatGPTResponse = async (prompt) => {
    const headers = {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
    };

    const data = {
        prompt: prompt,
        max_tokens: 150
    };

    try {
        const response = await axios.post(OPENAI_API_BASE_URL, data, { headers: headers });
        return response.data.choices[0].text.trim();
    } catch (error) {
        console.log(error);
        throw new Error(`OpenAI API Error: ${error.response ? error.response.data.error : error.message}`);
    }
};
