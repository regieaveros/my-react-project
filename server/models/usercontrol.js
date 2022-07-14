import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    index: { type: String },
    type: { type: String },
    label: { type: String },
    link: { type: String },
    iconcode: { type: String },
    accesstype: { type: Array },
    sidelink: { type: Array },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    updatedAt: {
        type: Date,
        default: new Date(),
    },
})

export default mongoose.model("UserControl", userSchema);