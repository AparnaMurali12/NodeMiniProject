const { use } = require('../routes/employee');
const sqlService = require('../services/sqlServices')

module.exports.createNewEmployee = async (userData) => {
    let response = await sqlService.addDoc(userData);
    return response
}

module.exports.displayPagenateEmp = async (userData) => {
    sqlService.getAllUsers(userData)
    return true
}

module.exports.createNewAttendance = async (userData) => {
    let response = await sqlService.addEmpAttendance(userData);
    return response
}

module.exports.displayPagenateAttendance = async (userData) => {
    sqlService.getAllAttendance(userData)
    return true
}

module.exports.employeeListAttendance = async (userData) => {
    sqlService.getEmpList(userData)
    return true
}

module.exports.empSearchList = async (userData) => {
    sqlService.getSearchList(userData)
    return true
}
