const utils = require('../utils/utils');

// Display list of all Users.
exports.userList = (req, res) => {
    let responseData = [];
    let users = utils.getUsers();

    // Simulates a query to a model or database. Also, formats the result.
    users.forEach(user => {
        let role = utils.getRoleById(user.role_id)
        responseData.push({
            name: user.user_name,
            role: role ? role.role_name : '',
            modules: role ? utils.getModulesByRoleId(role.id): []
        })
    })

    // Filter
    if(req.query.role) {
        responseData = utils.filterByKey(responseData, 'role', req.query.role)
    } 

    // Sort
    if(req.query.orderBy && req.query.order){
        responseData = utils.sortByKey(responseData, req.query.orderBy, req.query.order)
    }

    // Pagination
    if(req.query.pageSize && req.query.pageNumber){
        responseData = utils.paginate(responseData, parseInt(req.query.pageSize), parseInt(req.query.pageNumber))
    }
    
    res.send(responseData);
}

// Display detail page for a specific User.
exports.userDetail = (req, res) => {
    res.send('NOT IMPLEMENTED: User detail: ' + req.params.id);
}