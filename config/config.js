const config = {
    production: {
        mysql: {
            db_name: process.env.DB_NAME,
            db_host: process.env.DB_HOST,
            db_password: process.env.DB_PASSWORD,
            db_user: process.env.DB_USER,
            db_port: process.env.DB_PORT,
        },
    },
    development: {
        mysql: {
            db_name: process.env.DB_NAME,
            db_host: process.env.DB_HOST,
            db_password: process.env.DB_PASSWORD,
            db_user: process.env.DB_USER,
            db_port: process.env.DB_PORT,
        },
    }
}
module.exports = process.env.NODE_ENV === 'production' ? config.production : config.development

