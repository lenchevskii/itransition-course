const config = require('config.json')
const mongoose = require('mongoose')

mongoose.set('useCreateIndex', true)
mongoose.connect(process.env.MONGODB_URI || config.connectionString, { useNewUrlParser: true }, () => console.log('Connected to db'))

module.exports = {
    User: require('../users/user.model')
}