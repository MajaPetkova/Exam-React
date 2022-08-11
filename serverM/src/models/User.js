const { model, Schema } = require('mongoose');
const EMAIL_PATTERN = /^([a-zA-Z]+)@([a-zA-Z]+)\.([a-zA-Z]+)$/;


const userSchema = new Schema({
    email: {
        type: String, required: true, validate: {
            validator(value) {
                return EMAIL_PATTERN.test(value)
            },
            message: 'Email must be valid'
        }
    },
    hashedPassword: { type: String, required: true }
})
userSchema.index({ email: 1 }, {
    collation: {
        locale: 'en',
        strength: 1
    }
})

const User = model('User', userSchema)
module.exports = User;