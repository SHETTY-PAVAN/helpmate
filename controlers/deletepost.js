var connection = require('../config');
var message=""

module.exports.deletep= function(req, res)
{
    var examid= req.params.request_id;
    var examidf=examid.substring(1);
     console.log(examidf)

    connection.query('DELETE FROM `requests` WHERE request_id=?',[examidf],function(err, result){
        if(err)
     {
         message="Some Unexpected Error";
         res.render('studentpage',{message:message});
     } 
      else
      {
        
           
            res.redirect("/");
                 
      }

    });
}


