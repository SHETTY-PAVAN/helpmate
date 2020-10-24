var connection = require('../config');



module.exports.contactus=function(req, res){

    var messagee = req.body.message;
    var name = req.body.name;
    var email = req.body.email;

    var message="";

    connection.query("INSERT INTO `contact us`(`message`, `name`, `email`)  VALUES (?,?,?)",[messagee,name,email],function (error, results, fields) {

        if (error) 
        {
            message="some unexpected error"+error;
            res.render('contactus',{message:message});
        }
        else
        {
          console.log("message sent to admin!!");
          message ="We recived Your Messaga";
          res.render('contactus',{message:message});
    
        }


    })





}