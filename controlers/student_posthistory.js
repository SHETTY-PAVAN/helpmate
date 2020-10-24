var connection = require('../config');
var message=""

module.exports.posthistory= function(req, res)
{
    var studentID=req.session.studentId;

    connection.query('SELECT requests.student_id, requests.request_id,requests.exam_center,requests.exam_datetime,requests.exam_district,requests.exam_state,requests.exam_language,requests.request_status,user.user_id,user.user_firstname,user.user_lastname,user.user_mobile_number,user.user_email FROM requests LEFT JOIN user ON requests.scribe_id=user.user_id WHERE student_id=? ORDER BY exam_datetime ASC ',[studentID],function(err, result){
        if(err)
     {
         message="Some Unexpected Error";
         res.render('userpage',{message:message});
     }
     else
     {
       res.render('student_posthistory',{title: 'posts', result:result});
     }
    })

        

};

module.exports.scribe_posthistory= function(req, res)
{
    var scribeID=req.session.userId;

    connection.query('SELECT * FROM `requests` WHERE scribe_id=? ORDER BY exam_datetime DESC ',[scribeID],function(err, result){
        
        if(err)
     {
         message="Some Unexpected Error";
         res.render('userpage',{message:message});
     }
     else
     {
        res.render('scribe_history',{title: 'posts', result:result}); 
     }
        

    })



}