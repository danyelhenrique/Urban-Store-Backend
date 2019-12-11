require('./dotenv')

module.exports = {
  username: process.env.DATABASE_USER_NAME,
  password: process.env.DATABASE_USER_PASSWORD,
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  dialect: process.env.DATABASE_DIALECT,
  define: {
    timestamps: true,
    underscored: true
  }
}
