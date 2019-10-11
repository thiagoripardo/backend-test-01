const userController = require('../controllers/userController');

module.exports = (app) => {
    app.get('/users', userController.userList);
}