var express = require('express');
var connection = require('./../config');
var message="";

module.exports.signup=function(req, res){
    var today = new Date();
    var student_name  =req.body.student_name; 
    var student_mobile_number  = req.body.student_mobile_number;
    var student_email  = req.body.student_email;
    var password = req.body.password;
    var cpassword = req.body.cpassword;
    var student_disability_certificate = req.body.student_disability_certificate;
    var student_profile_img = req.body.student_profileimg;
    
    var reg_date = today;
    var update_date = today;
  if(password==cpassword)
  {
    connection.query('select * from user WHERE user_mobile_number=? OR user_email=?',[student_mobile_number,student_email],function(error,results){
    if(results.length > 0)
    {
             message="Email Id OR phone number is already registured as scribe";
             res.render('student_signup',{message:message});
    }
    else
    {
     connection.query('select * from student_pending WHERE student_mobile_number=?',[student_mobile_number],function (error, results, fields){
       if(results.length>0)
       {
         message="Mobile number already registered..."
         res.render('student_signup',{message:message});
        
       }
      else{
        connection.query('select * from student_pending WHERE student_email=?',[student_email],function (error, results, fields){
          if(results.length>0)
          {
            message="This email ID already registered..."
            res.render('student_signup',{message:message});
           
          }
          else
          {
            connection.query('INSERT INTO `student_pending`( `student_name`, `student_mobile_number`, `student_email`, `student_password`, `register_date`, `update_date`,`student_profile_img`,`student_disability_certificate`) VALUES (?,?,?,?,?,?,?,?)',[student_name,student_mobile_number,student_email,password,reg_date,update_date,student_disability_certificate,student_profile_img],function (error, results, fields) {
              if (error) throw error;
              else
              {
                console.log("inserted success!!");
                message ="User Registerd... login to continue";
                res.render('signin',{message:message});
          
              }
            });
          }

        });
        }

      
     });
    }
  });
 }  
 else
 {
   message="password don't match";
   res.render('student_signup',{message:message});
 }
}