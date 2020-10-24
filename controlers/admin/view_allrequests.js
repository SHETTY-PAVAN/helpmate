var  message="";

var connection = require('../../config');

module.exports.allrequests=function(req, res){
    connection.query('SELECT * FROM `requests`',function(err,result){
        if(err)
     {
         message="Some Unexpected Error";
         res.render('/',{message:message});
     }
     else
     {
       res.render('./admin/view_allrequests',{title: 'posts', result:result});
     }
    })
}


module.exports.allmatched_requests=function(req, res){
    connection.query('SELECT * FROM `requests` WHERE request_status="1" ORDER BY `requests`.`request_id` DESC ',function(err,result){
        if(err)
     {
         message="Some Unexpected Error";
         res.render('/',{message:message});
     }
     else
     {
       res.render('./admin/requests/view_allmatched_requests',{title: 'posts', result:result});
     }
    })
}


module.exports.allnotmatched_requests=function(req, res){
    connection.query('SELECT * FROM `requests` WHERE request_status="0" ORDER BY `requests`.`request_id` DESC ',function(err,result){
        if(err)
     {
         message="Some Unexpected Error";
         res.render('/',{message:message});
     }
     else
     {
       res.render('./admin/requests/view_allnotmatched_requests',{title: 'posts', result:result});
     }
    })
}