var mongoose = require('mongoose');

/** creates schema for topic */
var topicSchema = mongoose.Schema({
    qa: [{
        question: String,
        answer: String
    }],
    name: String,
    retainability: Number,
    reviews: [{
        dateOfReview: Date,
        score: Number
    }],
    strength: Number,
    priority: {type: String, enum: ['0', '1']},
    threshold:Number
}, {collection: 'topic', timestamps: true, autoIndex: true});

module.exports = topicSchema;
