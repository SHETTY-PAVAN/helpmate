var connection = require('../config');
var message=""

module.exports.post= function(req, res)
{
 connection.query('SELECT * FROM `requests` WHERE `request_status`=0 ',function(err, result)
 {
     if(err)
     {
         message="Some Unexpected Error";
         res.render('userpage',{message:message});
     }
     else
     {
       res.render('examlist',{title: 'posts', result:result});
     }

 });
}