var express = require('express');
var ejs = require('ejs');
var session = require('express-session');

var  message="";

var connection = require('../config');



module.exports.signin=function(req, res){
   
    var User_email = req.body.user_email;
    var password = req.body.password;
    var  message="";
  
    if (User_email && password) {
        console.log('checking user');
          connection.query('SELECT * FROM user WHERE (user_email=? OR user_mobile_number=?) AND user_password = ?', [User_email,User_email, password], function(error, results, fields) {
        if (results.length > 0)

         {   
          if(results[0].account_status  === 1)
          {
            res.redirect('scribe_pending_page');
          }
          else
          {
                  var sess = req.session;     
                  req.session.userId = results[0].user_id;
                  
                  console.log(results[0].user_id);
                  name= results[0].user_firstname+"."+results[0].user_lastname;
                  res.render('userpage',{name: name});
          }
                  
        } 
        else if(results.length === 0)
        {
            console.log('checking student');
            connection.query('SELECT * FROM student_pending WHERE (student_email =? OR student_mobile_number =?) AND student_password  = ?', [User_email,User_email, password], function(error, result, fields) {
                if (result.length > 0)
                 {
                     if(result[0].approve_status === 0)
                     {
                       res.redirect('student_pending_page');
                     }
                     else
                     {
                         var sess = req.session;     
                         req.session.studentId = result[0].student_id;
                         
                         
                          console.log(result[0].student_id);
                          studentname= result[0].student_name;
                          studentname = studentname.trim().replace(' ','.');

                          res.render('studentpage',{studentname: studentname, message:message});
                     }
                          
                } 
                else
                {
                    
                        message= "invalid user name or password";
                        res.render('signin',{message: message});
                        
                }		
            });
        }
        else
        {
            
                message= "invalid user name or password";
                res.render('signin',{message: message});
                  
        }			
              
          });
      } else {
          
          message= "Please enter Username and Password!";
                res.render('signin',{message: message});
          res.end();
      }
    }