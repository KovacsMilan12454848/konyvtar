const express = require('express');
const router = express.Router();
const path = require('path');


const userController = require('../controllers/index_oldal.js');


router.get('/home', userController.getINdex);
module.exports = router;

router.get('/',(req,res,next)=>{
res.sendFile(path.join(__dirname,'..','public','index.html'));

});
router.get('/login',(req,res,next)=>{
res.sendFile(path.join(__dirname,'..','public','index.html'));
});
router.get('/register',(req,res,next)=>{
res.sendFile(path.join(__dirname,'..','public','index.html'));
});

