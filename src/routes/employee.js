const router = require('express').Router()

const handler = require('../handlers/employee')

router.post('/createemployee',handler.empCreate)
router.post('/paginateemp',handler.empPaginate)
router.post('/createattendance',handler.attendanceCreate)
router.post('/paginateattendance',handler.attendancePaginate)
router.post('/listempattendance',handler.listAttendance)
router.post('/searchemp',handler.searchEmp)

module.exports = router
