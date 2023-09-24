const OpenAI=require("openai");
const openAI = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

exports.getGPTResponse=async(prompt)=>{
    try {
        const completion = await openAI.chat.completions.create({
            messages: [{ role: 'user', content: 'give me a nodejs boilerplate code"' }],
            model: 'gpt-3.5-turbo',
        });
        return { result: completion.choices };
      } catch(error) {
        // Consider adjusting the error handling logic for your use case
        if (error.response) {
         throw Error(error.response.status, error.response.data)
        } else {
          console.error(`Error with OpenAI API request: ${error.message}`);
         throw error;
        }
      }
}
