require('./dotenv');
const mongoose = require('mongoose')

const mongo = mongoose.connect(`
mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWOD}@cluster0-l8thx.mongodb.net/test?retryWrites=true&w=majority
`, { useNewUrlParser: true, useUnifiedTopology: true }).catch(err => console.warn('MONGO DB ERR', err))

module.exports = mongo