import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: { type: String },
    position: { type: String },
    image: { type: String },
    socialMedia: { type: Array },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    updatedAt: {
        type: Date,
        default: new Date(),
    },
})

export default mongoose.model("Professionals", userSchema);