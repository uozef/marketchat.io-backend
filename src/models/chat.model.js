const User = require('./../../lib/connection/mysql');
module.exports = function (sequelize, DataTypes) {
    const Chat = sequelize.define('chat', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        message: {
            type: DataTypes.TEXT, // Use TEXT for longer text messages
            allowNull: true, // Adjust this based on your requirements
        },
        ticker: {
            type: DataTypes.STRING, // Use TEXT for longer text messages
            allowNull: true, // Adjust this based on your requirements
        },
        user_id:{
            type: DataTypes.INTEGER,
        },
        timestamp: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    }, {
        tableName: 'chat',
    });

    return Chat;
};
