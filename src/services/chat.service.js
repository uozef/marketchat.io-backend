const {message, Op, chat} =
    require('./../../lib/connection/mysql');
console.log()
exports.getChats = async (userId) => {
    try {
        console.log("print");
        const cards = await chat.findAll({
            where: {user_id: userId},
            attributes: ['user_id', 'id','title']
        });
        return cards;
    } catch (error) {
        throw error;
    }
}
exports.getChatMessages = async (chatId) => {
    try {
        console.log("print");
        const chatMessages = await message.findAll({
            where: {chat_id: chatId},
        });
        return chatMessages;
    } catch (error) {
        throw error;
    }
}
exports.saveChat = async (userId, role, text, ticker, chatId) => {
    try {
        const timestamp = new Date();

        if (!chatId) {
            console.log(userId);
            const newChat = await chat.create({timestamp, user_id: userId,title:getFirstTwoWords(text)});
            chatId = newChat.id;
        }

        await message.create({
            timestamp,
            chat_id: chatId,
            ticker,
            text,
            role,
        });

        return true;
    } catch (error) {
        throw error;
    }
};

function getFirstTwoWords(inputString) {
    const words = inputString.split(' ');
    if (words.length >= 2) {
        return words.slice(0, 2).join(' ');
    } else {
        return inputString; // Return the original string if there are fewer than two words.
    }
}
