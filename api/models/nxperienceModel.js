'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
    description: {
        type: String,
    },
    tags: {
        type: String,
    },
    vid_url: {
        type: String,
    },
    insert_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Tasks', TaskSchema);