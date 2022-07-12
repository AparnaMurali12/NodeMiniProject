const bodyParser = require('body-parser')
const csv = require('fast-csv')
const fs = require('fs')
const service = require('../services/employeeServices')
const { json }=require('body-parser')

//Add new employees
module.exports.empCreate = async (req,res) => {
    const payloadCreate = req.body
    let response = await service.createNewEmployee(payloadCreate);
    if (response)
        res.send("New Employee Added")
}

//pagenation employee
module.exports.empPaginate = async (req, res) => {
    const payloadCreate = req.body
    //console.log(req);
    let response = await service.displayPagenateEmp(payloadCreate)
    if (response) {
        res.send("Pagenation Display Sucessfully")
    }
}
//Add attendance
module.exports.attendanceCreate = async (req,res) => {
    const payloadCreate = req.body
    let response = await service.createNewAttendance(payloadCreate);
    if (response)
        res.send("Attendance is Added")
}

//Attendance pagenation
module.exports.attendancePaginate = async (req, res) => {
    const payloadCreate = req.body
    //console.log(req);
    let response = await service.displayPagenateAttendance(payloadCreate)
    if (response) {
        res.send("Attendance Pagenation Displayed Sucessfully")
    }
}

module.exports.listAttendance = async (req, res) => {
    const payloadCreate = req.body
    //console.log(req);
    let response = await service.employeeListAttendance(payloadCreate)
    if (response) {
        res.send("Employee List is Displayed Sucessfully")
    }
}

module.exports.searchEmp = async (req, res) => {
    const payloadCreate = req.body
    //console.log(req);
    let response = await service.empSearchList(payloadCreate)
    if (response) {
        res.send("Employee Found")
    }
}

