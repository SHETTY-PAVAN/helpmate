var connection = require('./../config');
const request = require('request');




var message="";

module.exports.pin=function(req, res)
{
    var pincode=req.body.pincode;
    let url = "https://api.postalpincode.in/pincode/"+pincode;

let options = {json: true};
    if(pincode.length > 0)
    {
        request(url, options, (error, resp, body) => {
            if (error) {
                return  console.log(error)
            };
        
            if (!error && resp.statusCode == 200) {
                console.log('recive');
                console.log(body[0].Status);
                var status= body[0].Status;
                
                if(status == "Success")
                {
                    var sess = req.session;
                    var state =  body[0].PostOffice[0].State;
                    var District = body[0].PostOffice[0].District;
                    var taluk = body[0].PostOffice[0].Block;
                    var userId = req.session.studentId;
                    console.log(userId);
                    connection.query('SELECT student_name FROM `student_pending` WHERE student_id=?',[userId],function(err,result){
                     if(result.length >0)
                     {
                         var username = result[0].student_name;
                        console.log(username);
                     
                    
                    
                    
                    console.log("c");
                    console.log("super maga");
                    message="";
                    res.render('requestpage',{state:state, District:District, taluk:taluk,pincode:pincode, username:username,message:message});
                    
                    
                    }
                    else{
                        console.log('some error')
                       }
                   });
                }
                else
                {
                    console.log("error maga");
                    message="Please provide valid Pin code";
                    
                    res.render('studentpage',{message:message});
                    
                }
                
            };
        });
      
    }
    else{
         message="Please provide vaild pincode"
         res.render('studentpage',{message:message});
    }
};