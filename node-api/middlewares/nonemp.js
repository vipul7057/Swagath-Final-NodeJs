const mysql = require('mysql');
const Promise = require('bluebird');
const config = require('../config/dbconfig');

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let getNonEmps = async()=>{

    try {
        const conn =  mysql.createConnection(config);
        
        await conn.connectAsync();

        let sql = "SELECT * FROM NonEmployees";

        const result = await conn.queryAsync(sql);

        await conn.endAsync();

        return result;
        
    } catch (error) {
        console.log(error);
    }
};

let getNonEmp = async(id)=>{

    try {
        const conn =  mysql.createConnection(config);
        
        await conn.connectAsync();

        let sql = "SELECT * FROM NonEmployees WHERE PersonId = ?";

        const result = await conn.queryAsync(sql,[id]);

        await conn.endAsync();

        return result[0];
        
    } catch (error) {
        console.log(error);
    }
};

let getNonEmpByName = async(id)=>{

    try {
        const conn =  mysql.createConnection(config);
        
        await conn.connectAsync();

        let sql = "SELECT * FROM NonEmployees WHERE PersonName = ?";

        const result = await conn.queryAsync(sql,[id]);

        await conn.endAsync();

        return result[0];
        
    } catch (error) {
        console.log(error);
    }
};



let addNonEmp = async(input)=>{

    try {
        const conn =  mysql.createConnection(config);
        
        await conn.connectAsync();

        let sql = "INSERT INTO NonEmployees VALUES(?,?,?,?,?,?,?)";

        const result = await conn.queryAsync(sql,[
            input.PersonId,
            input.PersonName,
            input.PersonEmail,
            input.PersonAddress,
            input.PersonPhone,
            input.PersonPhoto,
            input.PersonType
            ]);

        await conn.endAsync();

        return result;
        
    } catch (error) {
        console.log(error);
    }
};

let updateNonEmp = async(input)=>{

    try {
        const conn =  mysql.createConnection(config);
        
        await conn.connectAsync();

        let sql = "UPDATE NonEmployees SET PersonName=?,PersonEmail=?,PersonAddress=?,PersonPhone=?,PersonPhoto=?,PersonType=? WHERE PersonId=?";

        const result = await conn.queryAsync(sql,[
            input.PersonName,
            input.PersonEmail,
            input.PersonAddress,
            input.PersonPhone,
            input.PersonPhoto,
            input.PersonType,
            input.PersonId
        ]);

        await conn.endAsync();

        return result;
        
    } catch (error) {
        console.log(error);
    }
};

let deleteNonEmp = async(id)=>{

    try {
        const conn =  mysql.createConnection(config);
        
        await conn.connectAsync();

        let sql = "DELETE FROM NonEmployees WHERE PersonId = ?";

        const result = await conn.queryAsync(sql,[id]);

        await conn.endAsync();

        return result;
        
    } catch (error) {
        console.log(error);
    }
};



module.exports = {getNonEmps,getNonEmp,addNonEmp,updateNonEmp,deleteNonEmp,getNonEmpByName} ;