const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'Weavers#456',
    database: 'miniProjectdb'
  });
  
  connection.connect(function (err) {
    if (err) throw err
    console.log("SQl Connected");
  })
//Add employee
  module.exports.addDoc = async (addEmployee) => {
    const { empid, empname, email, phnumber, joiningdate, role } = addEmployee
    let sql = `INSERT INTO employee (empid,empname,email,phnumber,joiningdate,role) 
    VALUES ('${empid}','${empname}','${email}','${phnumber}','${joiningdate}','${role}')`
    connection.query(sql, function (err, result) {
      if (err) throw err
      console.log("1 Record Inserted");
    })
    return sql
  }

//Pagenation
  module.exports.getAllUsers = (userData) => {
    return new Promise((resolve, reject) => {
      try {
        console.log(userData);
        let offset = "0";
        if (userData.offset){
          offset = userData.offset;
        }
        let perPage = 2;
        if (userData.perPage){
          perPage = userData.perPage;
        }
        sql = "select * from `employee` ";
        if (userData.orderBy){
          sql += "order by empid asc "
        }
        if (offset && perPage){
          sql += " limit "+ perPage +" offset "+ offset;
        }
        console.log(sql);
        connection.query(
          sql,
          function (error, results, fields) {
            console.log({ results });
            if (!results[0]) {
              resolve({status : "user not found"});
            }else{
              resolve(results)
            }
            if (error) {
              reject(error);
            }
          }
        );
      } catch (error) {
        console.log(error);
      }
    });
  };

// Add attendance
  module.exports.addEmpAttendance = async (addAttendance) => {
    const { attendanceid, empid, date, present} = addAttendance
    let sql = `INSERT INTO attendance (attendanceid,empid,date,present) 
    VALUES ('${attendanceid}','${empid}','${date}','${present}')`
    connection.query(sql, function (err, result) {
      if (err) throw err
      console.log("1 Record Inserted");
    })
    return sql
  }

// Attendance Pagenation
  module.exports.getAllAttendance = (userData) => {
    return new Promise((resolve, reject) => {
      try {
        console.log(userData);
        let offset = "0";
        if (userData.offset){
          offset = userData.offset;
        }
        let perPage = 2;
        if (userData.perPage){
          perPage = userData.perPage;
        }
        sql = `SELECT employee.empid,employee.empname,attendance.attendanceid,attendance.date,
        attendance.present
         FROM employee join attendance on attendance.empid = employee.empid `;
        if (userData.orderBy){
          sql += "order by attendanceid asc "
        }
        if (offset && perPage){
          sql += " limit "+ perPage +" offset "+ offset;
        }
        console.log(sql);
        connection.query(
          sql,
          function (error, results) {
            
            console.log({ results });
            if (!results) {
              resolve({status : "user not found"});
            }else{
              resolve(results)
            }
            if (error) {
              reject(error);
            }
          }
        );
      } catch (error) {
        console.log(error);
      }
    });
  };

  // module.exports.getEmpList = async (userData) => {
  //   let {date}=userData;
  //   let sql=`select * from attendance WHERE date='${date}'`
  //   console.log(sql);
  //   return sql;
  // };

  module.exports.getEmpList = (userData) => {
    let {date}=userData;
    return new Promise((resolve, reject) => {
      try {
        console.log(userData);
        let offset = "0";
        if (userData.offset){
          offset = userData.offset;
        }
        let perPage = 2;
        if (userData.perPage){
          perPage = userData.perPage;
        }
        sql = `SELECT * FROM attendance WHERE date='${date}'`;
        if (offset && perPage){
          sql += " limit "+ perPage +" offset "+ offset;
        }
        console.log(sql);
        connection.query(
          sql,
          function (error, results) {
            
            console.log({ results });
            if (!results) {
              resolve({status : "Attendance not found"});
            }else{
              resolve(results)
            }
            if (error) {
              reject(error);
            }
          }
        );
      } catch (error) {
        console.log(error);
      }
    });
  };

  module.exports.getSearchList = (userData) => {
    let {role}=userData;
    return new Promise((resolve, reject) => {
      try {
        console.log(userData);
        let offset = "0";
        if (userData.offset){
          offset = userData.offset;
        }
        let perPage = 2;
        if (userData.perPage){
          perPage = userData.perPage;
        }
        sql = `SELECT * FROM employee WHERE role='${role}'`;
        if (offset && perPage){
          sql += " limit "+ perPage +" offset "+ offset;
        }
        console.log(sql);
        connection.query(
          sql,
          function (error, results) {
            
            console.log({ results });
            if (!results) {
              resolve({status : "Employee not found"});
            }else{
              resolve(results)
            }
            if (error) {
              reject(error);
            }
          }
        );
      } catch (error) {
        console.log(error);
      }
    });
  };


  