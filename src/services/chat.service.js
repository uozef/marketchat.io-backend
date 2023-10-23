const {chat, Op} =
    require('./../../lib/connection/mysql');
console.log()
exports.getChats = async (userId) => {
    try {
        console.log("print");
        const cards = await chat.findAll({
            where: {user_id: userId},
            attributes:['message','timestamp','role','ticker','id']
        });
        console.log("pp");
        return cards;
    } catch (error) {
        throw error;
    }
}
exports.saveChat = async (userId, role, message,ticker) => {
    try {
        const timestamp = new Date();
         await chat.create({role, message, timestamp,user_id:userId,ticker});
        return true;
    } catch (error) {
        throw error;
    }
}
