var mongoose = require('mongoose');
var topicSchema = require('./topic.schema.server');
var topicModel = mongoose.model('TopicModel', topicSchema);


module.exports = {
    findTopic: findTopic,
    createTopic: createTopic,
    deleteTopic: deleteTopic,
    findTopicByName: findTopicByName,
    updateTopic: updateTopic,
    findAllTopics:findAllTopics
};

/**
 * gets topic with topic id
 *
 * @param Topic
 * @returns {Promise}
 */
function findTopic(topicId) {
    return topicModel.findById(topicId).catch(error => error);

}

/**
 * gets topic with topic id
 *
 * @param Topic
 * @returns {Promise}
 */
function findTopicByName(topicName) {
    return topicModel.findOne({name: topicName}).catch(error => error);

}


/**
 * find all topics
 *
 * @param Topic
 * @returns {Promise}
 */
function findAllTopics() {
    return topicModel.find().catch(error => error);

}

/**
 * Adds new topic
 *
 * @param Topic
 * @param longUrl
 * @returns {Promise}
 */
function createTopic(topic) {

    return topicModel.create(topic).catch(error => error);
}

/**
 * Delete the given topic.
 *
 * @param Topic
 * @returns {Promise}
 */
function deleteTopic(topicId) {
    return topicModel.deleteOne({_id: topicId}).catch(error => error);
}


/**
 * Update the given topic.
 *
 * @param Topic
 * @returns {Promise}
 */
function updateTopic(topic) {
    return topicModel.update({_id:topic._id},topic).catch(error => error);
}
