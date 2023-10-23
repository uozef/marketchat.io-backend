module.exports = function (sequelize, DataTypes) {
    const Message = sequelize.define('message', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        text: {
            type: DataTypes.TEXT, // Use TEXT for longer text messages
            allowNull: true, // Adjust this based on your requirements
        },
        ticker: {
            type: DataTypes.STRING, // Use TEXT for longer text messages
            allowNull: true, // Adjust this based on your requirements
        },
        chat_id:{
            type: DataTypes.INTEGER,
        },
        timestamp: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    }, {
        tableName: 'message',
    });

    return Message;
};
