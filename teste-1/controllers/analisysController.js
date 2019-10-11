const utils = require('../utils/utils');

// Display list of all Users.
exports.analisysList = (req, res) => {
    res.json(utils.getAnalisys());
}

// Display detail page for a specific User.
exports.analisysDetail = (req, res) => {
    let responseJson = utils.getAnalisysById(req.params.analisysId);
    responseJson ? res.json(responseJson) : res.status(404).json({error: `Sorry, the id:${req.params.analisysId} doesn't exists.`});
}