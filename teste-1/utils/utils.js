const analisys = require('../../assets/analysis');

const generateUnitaryChartFormat = (name, array) => {
    
    return {name: name, data: array};
}

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

// Simulate getting an analisys
const getAnalisys = () => {
    let responseJson = {}
    responseJson['1'] = {
        chart: generateUnitaryChartFormat(`var_1`, analisys),
        table: generateUnitaryTableFormat(`var_1`, analisys)
    }
    return responseJson;
}

const getAnalisysById = (id) => {
    let responseJson = {}
    if(typeof responseJson[id] !== 'function' && !isNaN(parseInt(id))) {
        responseJson[id] = {
            chart: generateUnitaryChartFormat(`var_${id}`, analisys),
            table: generateUnitaryTableFormat(`var_${id}`, analisys)
        }
    } else {
        responseJson = undefined
    }
    return responseJson;
}

module.exports = {
    generateUnitaryChartFormat,
    generateUnitaryTableFormat,
    getAnalisys,
    getAnalisysById
}