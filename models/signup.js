const mongoose = require('mongoose')
const Schema = mongoose.Schema

var SignupSchema = new Schema({
    name: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, index: {unique: true}}
},{
    timestamps: true,
    collection: 'userinfo'
})

module.exports = mongoose.model('Signup', SignupSchema)
