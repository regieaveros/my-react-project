import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: { type: String },
    position: { type: String },
    contact: { type: String },
    email: { type: String },
    description: { type: String },
    image: { type: String },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    updatedAt: {
        type: Date,
        default: new Date(),
    },
})

export default mongoose.model("Teams", userSchema);