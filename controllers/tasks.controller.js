module.exports = {
    create: function (req, res) {
        res.json([{id: 1, name: 'QA Test App'}]);
    },

    getAll: function (req, res) {
        res.json([{id: 1, name: 'QA Test App'}]);
    },

    getById: function (req, res) {
        res.json({id: 1, name: 'QA Test App'});
    }
};
