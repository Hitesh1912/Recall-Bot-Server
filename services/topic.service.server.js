module.exports = function (app) {

    var topicModel = require('../models/topic/topic.model.server');


    // configure end points.
    app.post('/api', createTopic);
    app.get('/api/:topicId', findTopic);
    app.get('/api', findAllTopics);
    app.get('/api/name/:topicName', findTopicByName);
    app.delete('/api/:topicId', deleteTopic);
    app.put('/api/:topicId', updateTopic);

    //app.patch('/api/:topicId', updateTopic);


    /**
     * creates a topic
     * @param req
     * @param res
     */
    function createTopic(req, res) {

        var topic = req.body;
        topic.name = topic.name.toString().toLowerCase();
        //topic['reviews'] =  [{dateOfReview:new Date(),score:}]
        console.log(JSON.stringify(topic));
        topicModel.createTopic(topic).then(
            function (response, error) {
                if (response) {
                    console.log(JSON.stringify(response));
                    res.status(200).json(response);
                }
                else {
                    res.status(500).send(error);
                }
            }
        );
    }

    /**
     * find a topic by id
     *
     * @param req
     * @param res
     */
    function findTopic(req, res) {
        var topicId = req.params['topicId'];
        topicModel.findTopic(topicId).then(
            function (response, error) {
                if (response) {
                    res.status(200).json(response);
                }
                else {
                    res.status(500).send(error);
                }
            }
        );
    }

    /**
     * find all topics
     *
     * @param req
     * @param res
     */
    function findAllTopics(req, res) {
        topicModel.findAllTopics().then(
            function (response, error) {
                if (response) {
                    res.status(200).json(response);
                }
                else {
                    res.status(500).send(error);
                }
            }
        );
    }

    /**
     * find a topic by name
     *
     * @param req
     * @param res
     */
    function findTopicByName(req, res) {
        var topicName = req.params['topicName'].toLowerCase();
        topicModel.findTopicByName(topicName).then(
            function (response, error) {
                if (response) {
                    res.status(200).json(response);
                }
                else {
                    res.status(500).send(error);
                }
            }
        );
    }

    /**
     * update topic
     *
     * @param req
     * @param res
     */
    function updateTopic(req, res) {
        // var topicId = req.params['topicId'];
        var topic = req.body;
        topicModel.updateTopic(topic).then(
            function (response, error) {
                if (response) {
                    res.status(200).json(response);
                }
                else {
                    res.status(500).send(error);
                }
            }
        );
    }


    /**
     * Deletes the topic.
     *
     * @param req
     * @param res
     */
    function deleteTopic(req, res) {
        var topicId = req.params['topicId'];
        topicModel.deleteTopic(topicId).then(
            function (response, error) {
                if (response) {
                    res.status(200).json(response);
                }
                else {
                    res.status(500).send(error);
                }
            }
        );
    }

};
