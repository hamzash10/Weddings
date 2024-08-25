const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weddingSchema = new Schema({
    groomName: {
        type: String,
        required: true,
    },
    groomFather: {
        type: String,
        required: true,
    },
    groomFamily: {
        type: String,
        required: true,
    },
    brideName: {
        type: String,
        required: true,
    },
    brideFather: {
        type: String,
        required: true,
    },
    brideFamily: {
        type: String,
        required: true,
    },
    day: {
        type: Number,
        required: true,
    },
    month: {
        type: Number,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    image: { // i will save it as Base64 string
        type: String,
        required: false,
    },
})

const Wedding = mongoose.model('Wedding', weddingSchema);

module.exports = Wedding;