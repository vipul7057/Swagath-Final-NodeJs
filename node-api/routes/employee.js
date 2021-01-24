const express = require('express');
const router = express.Router();
const employee = require('../middlewares/employee');

router.get('/getEmployees' , async (req, res) => {
    try {
            
        const result = await employee.getEmployees();
        
        res.send(result).status(200);

    } catch (error) {
        res.send(error.message).status(500);
    }
});

router.get('/getEmployee/:id' , async (req, res) => {
    try {

        const result = await employee.getEmployee(req.params.id);
        console.log(result);
        res.send(result).status(200);

    } catch (error) {
        res.send(error.message).status(500);
    }
});


router.post('/addEmployee',async(req, res)=>{
    try {

        const result = await employee.addEmployee(req.body);
        
        res.send(result).status(200);

    } catch (error) {
        res.send(error.message).status(500);
    }
});

router.put('/updateEmployee',async(req, res)=>{
    try {

        const result = await employee.updateEmployee(req.body);
        
        res.send(result).status(200);

    } catch (error) {
        res.send(error.message).status(500);
    }
});


router.delete('/deleteEmployee/:id',async(req, res)=>{
    try {
        //console.log(req.params.id);
        const result = await employee.deleteEmployee(req.params.id);
        
        res.send(result).status(200);

    } catch (error) {
        res.send(error.message).status(500);
    }
});



module.exports = router;

