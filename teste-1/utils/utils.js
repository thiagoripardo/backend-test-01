const analisys = require('../../assets/analysis.json');
const users = require('../../assets/user.json');
const clients = require('../../assets/client.json');
const roles = require('../../assets/role.json');
const modules = require('../../assets/module.json');
const moduleClient = require('../../assets/module-client.json');
const moduleGroup = require('../../assets/module-group.json');
const moduleRole = require('../../assets/module-role.json');

// generate a json in chart format
const generateUnitaryChartFormat = (name, array) => {

    return {
        name: name,
        data: array
    };
}

// generate an array in table format
const generateUnitaryTableFormat = (name, array) => {
    let responseArray = [];
    array.forEach(element => {
        responseArray.push({
            var: name,
            sample_time: element[0],
            value: element[1]
        })
    });
    return responseArray;
}

// Simulate getting analisys
const getAnalisys = () => {
    let responseJson = {}
    responseJson['1'] = {
        chart: generateUnitaryChartFormat(`var_1`, analisys),
        table: generateUnitaryTableFormat(`var_1`, analisys)
    }
    return responseJson;
}


// Simulate getting an analisys by id
const getAnalisysById = (id) => {
    let responseJson = {}
    if (typeof responseJson[id] !== 'function' && !isNaN(parseInt(id))) {
        responseJson[id] = {
            chart: generateUnitaryChartFormat(`var_${id}`, analisys),
            table: generateUnitaryTableFormat(`var_${id}`, analisys)
        }
    } else {
        responseJson = undefined
    }
    return responseJson;
}

// Simulate getting users
const getUsers = () => {
    return users;
}

// Simulate getting a user by id
const getUsersByClientId = (id) => {
    let user;
    if (!isNaN(parseInt(id))) {
        user = users.find(element => (element.client_id === parseInt(id)));
    }
    return user;
}

// Simulate getting a role by id
const getRoleById = (id) => {
    let role = roles.find(element => (element.id === id));
    return role;
}

// Simulate getting modules by role id
const getModulesByRoleId = (id) => {
    let filteredModules = []
    let filteredModuleRole = moduleRole.filter(element => (element.role_id === id));

    filteredModuleRole.forEach(element => {
        filteredModules = filteredModules.concat(modules
            .filter(_module => (_module.id === element.module_id))
            .map(_module => ({id: _module.id, description: _module.name})))
    })
    
    return filteredModules;
}

// Filter an array
const filterByKey = (array, key, value) => {
    return array.filter(element => (element[key] == value));
}

// Sort an array
const sortByKey = (array, key, order) => {
    return array.sort((a, b) => {
        var x = a[key];
        var y = b[key];
        if (order == 'asc') {
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        } else if (order == 'desc') {
            return ((x < y) ? 1 : ((x > y) ? -1 : 0));
        } else {
            return 0;
        }
    });
}

// Paginate an array (pageNumber starts at 1)
const paginate = (array, pageSize, pageNumber) => {
    --pageNumber;
    return array.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
}

module.exports = {
    generateUnitaryChartFormat,
    generateUnitaryTableFormat,
    getAnalisys,
    getAnalisysById,
    getUsers,
    getUsersByClientId,
    getRoleById,
    getModulesByRoleId,
    filterByKey,
    sortByKey,
    paginate
}