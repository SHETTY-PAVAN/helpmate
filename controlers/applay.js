var connection = require('../config');
var message=""

module.exports.examapplay= function(req, res)
{
    var examid= req.params.request_id;
    var examidf=examid.substring(1);
    var userId =req.session.userId;
    var request_status="1";
    console.log(examidf);
    connection.query('UPDATE `requests` SET `scribe_id`=?,`request_status`=? WHERE `request_id`=?',[userId,request_status,examidf],function(err, result){
        if(err)
     {
         message="Some Unexpected Error";
         res.render('userpage',{message:message});
     } 
      else
      {
        message="applayed sucessfully";
        var message1 ="Applied sucessfull";
          var message2 ="ExamID";
          res.render('requestsucess',{messageID:examidf,message1:message1,message2:message2});
      }

    });
}