const userController = require('../controllers/userController');

module.exports = (app) => {
    app.get('/users', userController.userList);

    app.get('/users/:clientId', userController.userDetail);
}