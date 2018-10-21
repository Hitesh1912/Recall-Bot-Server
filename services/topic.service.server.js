module.exports = function (app) {

    var topicModel = require('../models/topic/topic.model.server');
    var schedulerService = require('./scheduler.service.server');

    // configure end points.
    app.post('/api', createTopic);
    app.get('/api/topic/:topicId', findTopic);
    app.get('/api', findAllTopics);
    app.get('/api/revise', findReviseTopics);
    app.get('/api/name/:topicName', findTopicByName);
    app.delete('/api/:topicId', deleteTopic);
    app.put('/api/:topicId', updateTopic);
    app.put('/api/revise/:topicId', updateReviewScore);

    //app.patch('/api/:topicId', updupdateReviewScoreateTopic);

    /**
     * creates a topic
     * @param req
     * @param res
     */
    function createTopic(req, res) {

        var topic = req.body;
        topic.name = topic.name.toString().toLowerCase();
        //topic['reviews'] =  [{dateOfReview:new Date(),score:}]
        //console.log(JSON.stringify(topic));
        topicModel.createTopic(topic).then(
            function (response, error) {
                if (response) {
                    //console.log(JSON.stringify(response));
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


    /**
     * find revisable the topics.
     *
     * @param req
     * @param res
     */
    function findReviseTopics(req, res) {

        schedulerService.fetchAllData().then((data) => {
            if (data) {
                res.status(200).json(data);
            }
            else {
                res.status(500).send('Error');
            }
        });
    }


    var STRENGTH_VALS = [12, 22, 72, 182];

    /**
     * Review the updated stopic.
     *
     * @param req
     * @param res
     */
    function updateReviewScore(req, res) {
        var topicId = req.params['topicId'];
        var reviewDataScore = req.body['score'];
        topicModel.findTopic(topicId).then(
            function (response, error) {
                if (response) {
                    return response;
                }
                else {
                    res.status(500).send(error);
                    return null;
                }
            }
        ).then(response => {
            if (response) {
                console.log(response);
                response.reviews.push({
                    score: reviewDataScore,
                    dateOfReview: new Date()
                });
                if (reviewDataScore == 1) {
                    let currVal = response.strength;
                    var i = STRENGTH_VALS.findIndex((val) => val == currVal);
                    console.log(currVal);
                    console.log(i);
                    if (i < STRENGTH_VALS - 1)
                        response.strength = STRENGTH_VALS[i + 1]
                }
                topicModel.updateTopic(response).then((r, err) => {
                    if (response) {
                        res.status(200).json(r);
                    }
                    else {
                        res.status(500).send(err);
                    }
                });

            }
        });
    }
};
