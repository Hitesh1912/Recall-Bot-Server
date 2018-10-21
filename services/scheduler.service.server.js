var topicModel = require('../models/topic/topic.model.server');

module.exports = {
    fetchAllData: fetchAllData,
};

var array = [1, 4, 10, 18];

function fetchAllData() {

    return topicModel.findAllTopics().then((response, error) => {
        if (response) {
           // console.log(response);
            return response.filter(obj => checkObject(obj));
        } else {
            return error;
        }
    });
}

function checkObject(obj) {
    //console.log(obj.createdAt);
    var diff =((new Date().getTime() - new Date(obj.createdAt).getTime() )/ (60 * 60 * 1000 * 24));
    //console.log(diff);
    for (let i = 0; i < array.length; i++) {
        if (array[i] <= diff && obj.reviews.length < i + 1) {
           console.log(diff);
            return true;
        }
    }

    return false;
}

