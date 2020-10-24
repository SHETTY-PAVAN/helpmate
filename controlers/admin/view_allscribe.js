var  message="";

var connection = require('../../config');

module.exports.allscribe=function(req, res){
    connection.query('SELECT * FROM `user` WHERE account_status = "0"',function(err,result){
        if(err)
     {
         message="Some Unexpected Error";
         res.render('userpage',{message:message});
     }
     else
     {
       res.render('./admin/view_allscribe',{title: 'posts', result:result});
     }
    })
}


module.exports.allblockedscribe=function(req, res){
    connection.query('SELECT * FROM `user` WHERE account_status = "1"',function(err,result){
        if(err)
     {
         message="Some Unexpected Error";
         res.render('userpage',{message:message});
     }
     else
     {
       res.render('./admin/scribe/view_allblocked_scribe',{title: 'posts', result:result});
     }
    })
}


module.exports.allscribe_block=function(req, res){
    var  user_id= req.params.user_id;
    var  user_idf= user_id.substring(1);

     console.log(user_idf);
    var  account_status  ='1';

    connection.query('UPDATE `user` SET `account_status`=? WHERE `user_id`=?',[account_status,user_idf],function(err, result){
        if(err)
     {
         message="Some Unexpected Error";
         res.redirect('/admin/admin/view_allscribe');
         console.log("Error");
     } 
      else
      {
        message="blocked sucessfully";
        
          res.redirect('/admin/admin/view_allscribe');
          console.log('sucessfully');
      }


    });

}


module.exports.allscribe_unblock=function(req, res){
    var  user_id= req.params.user_id;
    var  user_idf= user_id.substring(1);

     console.log(user_idf);
    var  account_status  ='0';

    connection.query('UPDATE `user` SET `account_status`=? WHERE `user_id`=?',[account_status,user_idf],function(err, result){
        if(err)
     {
         message="Some Unexpected Error";
         res.redirect('/admin/admin/view_allblocked_scribe');
         console.log("Error");
     } 
      else
      {
        message="Un Blocked sucessfully";
        
          res.redirect('/admin/admin/view_allblocked_scribe');
          console.log('sucessfully');
      }


    });

}
