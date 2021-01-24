const mysql = require('mysql');
const Promise = require('bluebird');
const config = require('../config/dbconfig');

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let getAdmin = async(input)=>{

    try {
        const conn =  mysql.createConnection(config);
        
        await conn.connectAsync();

        let sql = "SELECT * FROM admin WHERE admin_email = ? and admin_pass = ?";

        const result = await conn.queryAsync(sql,[
            input.admin_email,
            input.admin_pass
        ]);
  
        await conn.endAsync();

        return result[0];
        
    } catch (error) {
        console.log(error);
    }
};

module.exports={getAdmin};