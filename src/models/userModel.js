import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please enter your username'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please enter your password']
    },
    isVerified: {
        type: Boolean,
        default: false
    },

    isAdmin: {
        type: Boolean,
        default: false
    },
    //token might come in the url or in the body it doesnot matter
    //logic for verify and forgetpassword
    forgetPasswordToken: String,
    forgetPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date
})

//different way to export in next.js other than mern
const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;

//user model containe 👇

//schema for user details(username,email,password)
// type of user want(enum:admin,user)
// varification of user using the token 