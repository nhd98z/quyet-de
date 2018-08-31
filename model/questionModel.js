/* jshint esversion: 6 */
(() => {
    'use strict';
})();

const 
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const questionSchema = new Schema({
    question: {
        type: String,
        require: true
    },
    yes: {
        type: Number,
        default: 0
    },
    no: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('question', questionSchema);