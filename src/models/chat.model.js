const User = require('./../../lib/connection/mysql');
module.exports = function (sequelize, DataTypes) {
    const Chat = sequelize.define('chat', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
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
