var  message="";

var connection = require('../../../config');

module.exports.allstudents_aprove=function(req, res){
    connection.query('SELECT * FROM `student_pending` WHERE approve_status = "0"',function(err,result){
        if(err)
     {
         message="Some Unexpected Error";
         res.render('userpage',{message:message});
     }
     else
     {
       res.render('./admin/student/view_allstudents_aprove',{title: 'posts', result:result});
     }
    });
}
 
module.exports.allstudents_aproved=function(req, res){
    var  student_id= req.params.student_id;
    var  student_idf= student_id.substring(1);

     console.log(student_id);
    var  approve_status ='1';

    connection.query('UPDATE `student_pending` SET `approve_status`=? WHERE `student_id`=?',[approve_status,student_idf],function(err, result){
        if(err)
     {
         message="Some Unexpected Error";
         res.redirect('/admin/admin/view_allstudents_aprove');
         console.log("Error");
     } 
      else
      {
        message="applayed sucessfully";
        
          res.redirect('/admin/admin/view_allstudents_aprove');
          console.log('sucessfully');
      }


    });

}
