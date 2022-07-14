import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    fullname: { type: String },
    email: { type: String },
    subject: { type: String },
    message: { type: String },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    updatedAt: {
        type: Date,
        default: new Date(),
    },
})

export default mongoose.model("Message", userSchema);