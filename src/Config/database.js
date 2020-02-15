import './dotenv'

module.exports = {
	username: process.env.DATABASE_USER_NAME,
	password: process.env.DATABASE_USER_PASSWORD,
	database: process.env.DATABASE_NAME,
	host: process.env.DATABASE_HOST,
	dialect: process.env.DATABASE_DIALECT,
    dialectOptions: {
    ssl: true
    },
	define: {
		timestamps: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	}
}
