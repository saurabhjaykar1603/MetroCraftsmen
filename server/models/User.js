import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        default: 'prefect not to say'
    },
    address: {
        type: String,
        required: true
    }

})

const User = model('User', userSchema);

export default User