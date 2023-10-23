const {message, Op, chat} =
    require('./../../lib/connection/mysql');
console.log()
exports.getChats = async (userId) => {
    try {
        console.log("print");
        const cards = await chat.findAll({
            where: {user_id: userId},
            attributes: ['user_id', 'id']
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
            const newChat = await chat.create({timestamp, user_id: userId});
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

