// Display list of all Users.
exports.userList = (req, res) => {
    res.json({user: 'test'});
}

// Display detail page for a specific User.
exports.userDetail = (req, res) => {
    res.send('NOT IMPLEMENTED: User detail: ' + req.params.id);
}