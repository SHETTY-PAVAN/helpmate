var  message="";

var connection = require('../../config');

module.exports.allmessage=function(req, res){
    connection.query('SELECT * FROM `contact us`',function(err,result){
        if(err)
     {
         message="Some Unexpected Error";
         res.render('userpage',{message:message});
     }
     else
     {
       res.render('./admin/view_allmessages',{title: 'posts', result:result});
     }
    })
}