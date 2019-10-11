const analisysController = require('../controllers/analisysController');

module.exports = (app) => {

    // A general analisys
    app.get('/analisys', analisysController.analisysList);

    // A specific analisys
    app.get('/analisys/:analisysId', analisysController.analisysDetail);
}