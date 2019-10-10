const utils = require('../utils/utils');

module.exports = (app) => {

    // A general analisys
    app.get('/analisys', function (req, res) {
        res.json(utils.getAnalisys());
    })

    // A specific analisys
    app.get('/analisys/:analisysId', function (req, res) {
        let responseJson = utils.getAnalisysById(req.params.analisysId);
        responseJson ? res.json(responseJson) : res.status(404).json({error: `Sorry, the id:${req.params.analisysId} doesn't exists.`});
    })
}