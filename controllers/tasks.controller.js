var StatsD = require('hot-shots');
var dogstatsd = new StatsD();

module.exports = {
    create: function (req, res) {
        dogstatsd.increment('task.create');
        res.json([{id: 1, name: 'QA Test App'}]);
    },

    getAll: function (req, res) {
        dogstatsd.increment('task.getAll');
        res.json([{id: 1, name: 'QA Test App'}]);
    },

    getById: function (req, res) {
        dogstatsd.increment('task.getById');
        res.json({id: 1, name: 'QA Test App'});
    }
};
