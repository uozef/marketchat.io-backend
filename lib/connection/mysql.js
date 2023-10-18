const { Sequelize, DataTypes } = require('sequelize');
const { db_name, db_host, db_password, db_user, db_port } = require("./../../config/config").mysql;
const sequelize = new Sequelize(db_name, db_user, db_password, {
    host: db_host,
    port: db_port,
    dialect: "mysql",
    logging: function () { },
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    define: {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        freezeTableName: true
    },

});
const { Op } = require("sequelize");
sequelize.authenticate().then(() => {
    console.log('checkout >> Database >> mysql connected:');
}).catch(err => {
    console.error('checkout >> Database Error >> mysql connection error:', err);
});
const user = require('../../src/models/user.model')(sequelize, Sequelize);
const chat = require('../../src/models/chat.model')(sequelize, Sequelize);
sequelize.sync({force:true}).then(() => {
        console.log('syncing done');
    }
).catch((err) => {
    console.log('syncing throw error', err);
})

module.exports = {
    Op: Op,
    chat: chat,
    user:user,
}

