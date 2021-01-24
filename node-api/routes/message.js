const express = require('express');
const router = express.Router();
const message = require('../middlewares/message');

router.get('/getMessages' , async (req, res) => {
    try {

        const result = await message.getMessages();
        
        res.send(result).status(200);

    } catch (error) {
        res.send(error.message).status(500);
    }
});

router.get('/getMessage/:id' , async (req, res) => {
    try {

        const result = await message.getMessage(req.params.id);
        
        res.send(result).status(200);

    } catch (error) {
        res.send(error.message).status(500);
    }
});

router.get('/getMessageByEmpId/:id' , async (req, res) => {
    try {

        const result = await message.getMessageByEmpId(req.params.id);
        
        res.send(result).status(200);

    } catch (error) {
        res.send(error.message).status(500);
    }
});



router.get('/getMessageByEmpIdWithName/:id' , async (req, res) => {
    try {

        const result = await message.getMessageByEmpIdWithNAme(req.params.id);
        
        res.send(result).status(200);

    } catch (error) {
        res.send(error.message).status(500);
    }
});


router.post('/addMessage',async(req, res)=>{
    try {

        const result = await message.addMessage(req.body);
        
        res.send(result).status(200);

    } catch (error) {
        res.send(error.message).status(500);
    }
});

router.put('/updateMessage',async(req, res)=>{
    try {

        const result = await message.updateMessage(req.body);
        
        res.send(result).status(200);

    } catch (error) {
        res.send(error.message).status(500);
    }
});

router.put('/updateMessageStatus',async(req, res)=>{
    try {

        console.log(req.body);
        const result = await message.updateMessage(req.body);
        
        res.send(result).status(200);

    } catch (error) {
        res.send(error.message).status(500);
    }
});

router.delete('/deleteMessage/:id',async(req, res)=>{
    try {
        //console.log(req.params.id);
        const result = await message.deleteMessage(req.params.id);
        
        res.send(result).status(200);

    } catch (error) {
        res.send(error.message).status(500);
    }
});



module.exports = router;