require('dotenv').config();
const express = require('express');
const cors = require('cors');
const employee = require('./routes/employee');
const nonemp = require('./routes/nonemp');
const message = require('./routes/message');
const admin = require('./routes/admin');
const app = express();

//sequence of using functions in the pipelines is important
//follow a proper sequence of use methods

//cross origin
app.use(cors());

//for request and response
app.use(express.json());

//base url -- hitted by angular 
//decides the routes where to go in the api 
app.use('/api/employee',employee);
app.use('/api/nonemp',nonemp);
app.use('/api/message',message);
app.use('/api/admin',admin);

//set port 
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log('listening on port '+ port);
});


//complete url for Employees
//http://localhost:3000/api/employee/getEmployees
//http://localhost:3000/api/employee/getEmployee
//http://localhost:3000/api/employee/addEmployee
//http://localhost:3000/api/employee/updateEmployee
//http://localhost:3000/api/employee/deleteEmployee

//complete url for NonEmps
//http://localhost:3000/api/nonemp/getNonEmps
//http://localhost:3000/api/nonemp/getNonEmp
//http://localhost:3000/api/nonemp/addNonEmp
//http://localhost:3000/api/nonemp/updateNonEmp
//http://localhost:3000/api/nonemp/deleteNonEmp

//complete url for Message
//http://localhost:3000/api/message/getMessages
//http://localhost:3000/api/message/getMessage
//http://localhost:3000/api/message/getMessageByEmpId
//http://localhost:3000/api/message/addMessage
//http://localhost:3000/api/message/updateMessage
//http://localhost:3000/api/message/deleteMessage

//http://localhost:3000/api/message//getMessageByEmpIdWithName/:id