var express = require('express');
var connection = require('./../config');
var message="";

module.exports.signup=function(req, res)
{
    var today = new Date();
    var User_firstname =req.body.User_firstname;
    var User_lastname =req.body.User_lastname;
    var Mobile_number = req.body.Mobile_number;
    var User_email = req.body.User_email;
    var password = req.body.password;
    var cpassword = req.body.cpassword;
    var reg_date = today;
    var update_date = today;
    var account_status = 0;
    if(password==cpassword)
    { 
        connection.query('select * from student_pending WHERE student_mobile_number=? OR student_email =?',[Mobile_number,User_email],function(error,results)
        {
         if(results.length > 0)
         {
             message="Email Id OR phone number is already registured as student";
             res.render('scribe_signup',{message:message});
         }
         else
          {
            connection.query('select * from user WHERE user_mobile_number=?',[Mobile_number],function (error, results, fields){
                if(results.length>0)
                {
                  message="Mobile number already registered..."
                  res.render('scribe_signup',{message:message});
                 
                }
               else
               {
                connection.query('select * from user WHERE user_email=?',[User_email],function (error, results, fields){
                    if(results.length>0)
                    {
                      message="This email ID already registered..."
                      res.render('scribe_signup',{message:message});
                     
                    }
                    else
                    {
                        connection.query('INSERT INTO `user`( `user_firstname`, `user_lastname`, `user_mobile_number`, `user_email`, `user_password`, `register_date`, `update_date`,`account_status`) VALUES (?,?,?,?,?,?,?,?)',[User_firstname,User_lastname,Mobile_number,User_email,password,reg_date,update_date,account_status],function (error, results, fields) {
                            if (error) 
                            {
                                message="some unexpected error"+error;
                                res.render('scribe_signup',{message:message});
                            }
                            else
                            {
                              console.log("inserted success!!");
                              message ="signup sucessfull plz login to continue";
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
   res.render('signup',{message:message});
 }
}