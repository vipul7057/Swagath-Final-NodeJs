const mysql = require('mysql');
const Promise = require('bluebird');
const config = require('../config/dbconfig');

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let getMessages = async()=>{

    try {
        const conn =  mysql.createConnection(config);
        
        await conn.connectAsync();

        let sql = "SELECT * FROM Message";

        const result = await conn.queryAsync(sql);

        await conn.endAsync();

        return result;
        
    } catch (error) {
        console.log(error);
    }
};

let getMessage = async(id)=>{

    try {
        const conn =  mysql.createConnection(config);
        
        await conn.connectAsync();

        let sql = "SELECT * FROM Message WHERE MsgId = ?";

        const result = await conn.queryAsync(sql,[id]);

        await conn.endAsync();

        return result;
        
    } catch (error) {
        console.log(error);
    }
};


let getMessageByEmpId = async(id)=>{

    try {
        const conn =  mysql.createConnection(config);
        
        await conn.connectAsync();

        let sql = "SELECT * FROM Message WHERE EmpId = ?";

        const result = await conn.queryAsync(sql,[id]);

        await conn.endAsync();

        return result;
        
    } catch (error) {
        console.log(error);
    }
};

let getMessageByEmpIdWithNAme = async(id)=>{

    try {
        const conn =  mysql.createConnection(config);
        
        await conn.connectAsync();

        let sql = "Select Message.MsgId,Message.MsgDesc,Message.PersonId,Message.EmpId,Message.MsgType,Message.MsgDateTime,Message.MsgStatus,NonEmployees.PersonName from Message,NonEmployees where Message.EmpId = ? and Message.PersonId = NonEmployees.PersonId";

        const result = await conn.queryAsync(sql,[id]);

        await conn.endAsync();

        return result;
        
    } catch (error) {
        console.log(error);
    }
};


let addMessage = async(input)=>{

    try {
        const conn =  mysql.createConnection(config);
        
        await conn.connectAsync();

        let sql = "INSERT INTO Message VALUES(?,?,?,?,?,?,?)";

        const result = await conn.queryAsync(sql,[
            input.MsgId,
            input.MsgDesc,
            input.PersonId,
            input.EmpId,
            input.MsgType,
            input.MsgDateTime,
            input.MsgStatus
            
            ]);

        await conn.endAsync();

        return result;
        
    } catch (error) {
        console.log(error);
    }
};

let updateMessage = async(input)=>{

    try {
        const conn =  mysql.createConnection(config);
        
        await conn.connectAsync();

        let sql = "UPDATE Message SET MsgDesc=?,PersonId=?,EmpId=?,MsgType=?,MsgDateTime=?,MsgStatus=? WHERE MsgId=?";

        const result = await conn.queryAsync(sql,[
            input.MsgDesc,
            input.PersonId,
            input.EmpId,
            input.MsgType,
            input.MsgDateTime,
            input.MsgStatus,
            input.MsgId
        ]);

        await conn.endAsync();

        return result;
        
    } catch (error) {
        console.log(error);
    }
};

let updateMessageStatus = async(input)=>{

    try {
        const conn =  mysql.createConnection(config);
        
        await conn.connectAsync();

        let sql = "UPDATE Message SET MsgStatus=? WHERE MsgId=?";

        const result = await conn.queryAsync(sql,[input.MsgStatus,input.MsgId]);

        await conn.endAsync();

        return result;
        
    } catch (error) {
        console.log(error);
    }
};



let deleteMessage = async(id)=>{

    try {
        const conn =  mysql.createConnection(config);
        
        await conn.connectAsync();

        let sql = "DELETE FROM Message WHERE MsgId = ?";

        const result = await conn.queryAsync(sql,[id]);

        await conn.endAsync();

        return result;
        
    } catch (error) {
        console.log(error);
    }
};



module.exports = {getMessages,getMessage,getMessageByEmpId,addMessage,updateMessage,deleteMessage,updateMessageStatus, getMessageByEmpIdWithNAme} ;