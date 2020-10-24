var connection = require('./../config');


var message="";

module.exports.request=function(req, res,)
{
    var student_name =req.body.student_name;
    var student_id =req.session.studentId;
    var exam_date = req.body.date;
    var exam_time =req.body.select_time ;
    var exam_center =req.body.examcenter ;
    var exam_duration =req.body.select_duration ;
    var exam_center_address=req.body.examcenteraddress ;
    var exam_language =req.body.select_language ;
    var comments =req.body.comments ;
    var exam_type  =req.body.select_examtype ;
    var exam_pincode  = req.body.pincode;
    var valexam_pincode  = exam_pincode.substr(10);
    var exam_state =req.body.state ;
    var valexam_state = exam_state.substr(7);
    var exam_district =req.body.District ;
    var valexam_district = exam_district.substr(10);
    var exam_taluk  =req.body.taluk ;
    var valexam_taluk =exam_taluk.substr(7);
    var request_time  = new Date();
    console.log(exam_date);
    console.log(student_name);
    var valexam_date = exam_date.slice(6,10)+"-"+exam_date.slice(0,2)+"-"+exam_date.slice(3,5);
    var exam_datetime =valexam_date+" "+exam_time;
    console.log(student_id);

    connection.query('INSERT INTO `requests` ( `student_id`, `student_name`, `exam_date`,`exam_datetime`, `exam_time`, `exam_center`, `exam_duration`, `exam_center_address`, `exam_language`, `comments`, `exam_type`, `exam_pincode`, `exam_state`, `exam_district`, `exam_taluk`, `request_time`) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    [student_id,student_name,valexam_date,exam_datetime,exam_time,exam_center,exam_duration,exam_center_address,exam_language,comments,exam_type,valexam_pincode,valexam_state,valexam_district,valexam_taluk,request_time],function(error,result){
        if (error) 
        {
            message="some unexpected error"+error;
            res.render('requestpage',{message:message,username:student_name,state:valexam_state, District:valexam_district, taluk:valexam_taluk,pincode:valexam_pincode});
        }
        else
        {
          console.log("inserted success!!");
          message ="Request sucessfull ";
          var resl=result.insertId;
          console.log(resl);
          var message1 ="Request sucessfull";
          var message2 ="RequestID"
          res.render('requestsucess',{messageID:resl,message1:message1,message2:message2});
          
          
    
        }
    });

    
}