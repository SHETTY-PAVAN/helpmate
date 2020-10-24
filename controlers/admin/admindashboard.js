var  message="";

var connection = require('../../config');

module.exports.admindash=function(req, res){
    
    connection.query('SELECT COUNT(*) as totstudent FROM `student_pending`',function(err,result){
    var totstudent = result[0].totstudent;

    connection.query('SELECT COUNT(*) as totstudent_toapprove FROM `student_pending` WHERE approve_status= "0" ',function(err,result){
        var totstudent_toapprove = result[0].totstudent_toapprove;

        connection.query('SELECT COUNT(*) as totstudent_active FROM `student_pending` WHERE approve_status= "1" ',function(err,result){
            var totstudent_active = result[0].totstudent_active;
    
    

    connection.query('SELECT COUNT(*) as totuser FROM `user`',function(err,result){
        var totuser = result[0].totuser;

        connection.query('SELECT COUNT(*) as totuseractive FROM `user`WHERE account_status ="0" ',function(err,result){
            var totuseractive = result[0].totuseractive;

            connection.query('SELECT COUNT(*) as totuserblock FROM `user`WHERE account_status ="1" ',function(err,result){
                var totuserblock = result[0].totuserblock;
        

        connection.query('SELECT COUNT(*) as totrequests FROM `requests`',function(err,result){
            var totrequests = result[0].totrequests;

            connection.query('SELECT COUNT(*) as totrequests_match FROM `requests` WHERE request_status="1"',function(err,result){
                var totrequests_match = result[0].totrequests_match;

                connection.query('SELECT COUNT(*) as totrequests_notmatch FROM `requests` WHERE request_status="0" ',function(err,result){
                    var totrequests_notmatch = result[0].totrequests_notmatch;

                    
           
            
        
            res.render('./admin/admin_dashboard',{totstudent:totstudent, totstudent_toapprove:totstudent_toapprove, totstudent_active:totstudent_active, totuser:totuser, totuserblock:totuserblock, totuseractive:totuseractive, totrequests:totrequests, totrequests_match:totrequests_match, totrequests_notmatch:totrequests_notmatch});

        });
        });
        });
        });
        });
        });
        });
        });
       });
       
}