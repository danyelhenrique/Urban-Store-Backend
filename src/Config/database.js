import './dotenv'

module.exports = {
<<<<<<< HEAD
    username: process.env.DATABASE_USER_NAME,
    password: process.env.DATABASE_USER_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DIALECT,
    define: {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
=======
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
>>>>>>> bb4bc3d1cabb8f7db52f4315948003a732b3d7a1
}
