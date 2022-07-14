import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    title: { type: String },
    tag: { type: String },
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

export default mongoose.model("News", userSchema);