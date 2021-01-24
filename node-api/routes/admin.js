const express = require('express');
const router = express.Router();
const admin = require('../middlewares/admin');

router.post('/getadmin' , async (req, res) => {
    try {

        const result = await admin.getAdmin(req.body);
        console.log(result);
        res.send(result).status(200);

    } catch (error) {
        res.send(error.message).status(500);
    }
});

module.exports = router;