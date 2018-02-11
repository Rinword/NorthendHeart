var post = require('./routes/post');

var setRoutes = function(app) {
    app.use('/api/v1/send-bid', post);
};
module.exports = setRoutes;
