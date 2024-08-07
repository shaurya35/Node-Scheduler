const mongoose = require('mongoose');

const scheduleSchema = new mongoose.schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        required:true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('schedule', scheduleSchema);