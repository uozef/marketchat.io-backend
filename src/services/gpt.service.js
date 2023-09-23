const axios = require('axios');
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_API_URL = 'https://api.openai.com/v1/engines/davinci/completions';
exports.getGPTResponse=async(prompt)=>{
    const headers = {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
        'User-Agent': 'OpenAI-NodeJS-Client'
    };

    const data = {
        prompt: prompt,
        max_tokens: 150 // You can adjust this as needed
    };

    try {
        const response = await axios.post(OPENAI_API_URL, data, { headers: headers });
        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Error calling OpenAI API:', error);
        throw error;
    }
}
