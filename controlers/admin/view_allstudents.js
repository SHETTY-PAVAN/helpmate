var  message="";

var connection = require('../../config');

module.exports.allstudents=function(req, res){
    connection.query('SELECT * FROM `student_pending`',function(err,result){
        if(err)
     {
         message="Some Unexpected Error";
         res.render('userpage',{message:message});
     }
     else
     {
       res.render('./admin/view_allstudents',{title: 'posts', result:result});
     }
    })
}