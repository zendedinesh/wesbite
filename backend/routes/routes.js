 const express=require("express");
 const router=express.Router;
 
 //import all controllers file ;
 const auth = require("../controller/authController");

 router.post('/register',auth.authRegister); 

 module.exports=router;