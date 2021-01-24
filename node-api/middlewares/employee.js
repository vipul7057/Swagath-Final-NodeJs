const mysql = require('mysql');
const Promise = require('bluebird');
const config = require('../config/dbconfig');

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let getEmployees = async ()=>{

    try {
        const conn =  mysql.createConnection(config);
        
        await conn.connectAsync();

        let sql = "SELECT * FROM Employees";

        const result = await conn.queryAsync(sql);

        await conn.endAsync();

        return result;
        
    } catch (error) {
        console.log(error);
    }
};

let getEmployee = async(id)=>{

    try {
        const conn =  mysql.createConnection(config);
        
        await conn.connectAsync();

        let sql = "SELECT * FROM Employees WHERE EmpId = ?";

        const result = await conn.queryAsync(sql,[id]);
  
        await conn.endAsync();

        return result[0];
        
    } catch (error) {
        console.log(error);
    }
};



let addEmployee = async(input)=>{

    try {
        const conn =  mysql.createConnection(config);
        
        await conn.connectAsync();

        let sql = "INSERT INTO Employees VALUES(?,?,?,?,?,?,?,?)";

        const result = await conn.queryAsync(sql,[
            input.EmpId,
            input.EmpName,
            input.EmpEmail,
            input.EmpPhone,
            input.EmpRoom,
            input.EmpCubical,
            input.EmpPhoto,
            input.EmpType
            ]);

        await conn.endAsync();

        return result;
        
    } catch (error) {
        console.log(error);
    }
};

let updateEmployee = async(input)=>{

    try {
        const conn =  mysql.createConnection(config);
        
        await conn.connectAsync();

        let sql = "UPDATE Employees SET EmpName=?,EmpEmail=?,EmpPhone=?,EmpRoom=?,EmpCubical=?,EmpPhoto=?,EmpType=? WHERE EmpId=?";

        const result = await conn.queryAsync(sql,[
            input.EmpName,
            input.EmpEmail,
            input.EmpPhone,
            input.EmpRoom,
            input.EmpCubical,
            input.EmpPhoto,
            input.EmpType,
            input.EmpId
        ]);

        await conn.endAsync();

        return result;
        
    } catch (error) {
        console.log(error);
    }
};

let deleteEmployee = async(id)=>{

    try {
        const conn =  mysql.createConnection(config);
        
        await conn.connectAsync();

        let sql = "DELETE FROM Employees WHERE EmpId = ?";

        const result = await conn.queryAsync(sql,[id]);

        await conn.endAsync();

        return result;
        
    } catch (error) {
        console.log(error);
    }
};



module.exports = {getEmployees,getEmployee,addEmployee,updateEmployee,deleteEmployee} ;