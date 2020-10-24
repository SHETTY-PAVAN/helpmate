var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var  message="";

var connection = require('../../config');


module.exports.adminlogin=function(req, res){
    var admin_id = req.body.admin_id;
    var admin_password = req.body.admin_password;
    console.log('i am in admin login controler')


    if (admin_id && admin_password)
    { 
        connection.query('SELECT * FROM admin WHERE admin_id=? AND admin_password = ?',[admin_id,admin_password],function(error, results, fields) {
            if (results.length > 0)
            {
                // req.session.adminId = results[0].admin_id;
                res.redirect('admin_dashboard');
            }
            else
                {
                    
                        message= "invalid user name or password";
                        res.render('adminsignin',{message: message});
                        
                }
        });
    }
    else {
        message= " Please enter Username and Password!";
        res.render('adminsignin',{message: message});
        
        
    }

}
