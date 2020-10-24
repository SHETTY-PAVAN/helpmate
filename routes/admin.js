var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var adminrout = express.Router();
var message ="";

var adminsignin = require('./../controlers/admin/adminsignin.js');
var admindashboard = require('./../controlers/admin/admindashboard.js');
var view_allmessages = require('./../controlers/admin/view_allmessages.js')
var view_allstudents =require('./../controlers/admin/view_allstudents.js');
var view_allscribe =require('./../controlers/admin/view_allscribe.js');
var view_allrequests =require('./../controlers/admin/view_allrequests.js');
var view_allstudents_aprove =require('./../controlers/admin/student/view_allstudents_aprove.js');



var urlencodedParser = bodyParser.urlencoded({ extended: false })

adminrout
  .route('/signin')
  .get(function(req,res){
    res.render('adminsignin',{message:message})
  });

  adminrout
  .route('/signin')
  .post(urlencodedParser,adminsignin.adminlogin);

  adminrout
  .route('/admin_dashboard')
  .get(urlencodedParser,admindashboard.admindash);

  adminrout
  .route('/admin/view_messages')
  .get(urlencodedParser,view_allmessages.allmessage);


  adminrout
  .route('/admin/view_allstudents')
  .get(urlencodedParser,view_allstudents.allstudents);

  adminrout
  .route('/admin/view_allscribe')
  .get(urlencodedParser,view_allscribe.allscribe);

  adminrout
  .route('/admin/view_allblocked_scribe')
  .get(urlencodedParser,view_allscribe.allblockedscribe);

  adminrout
  .route('/admin/view_allrequests')
  .get(urlencodedParser,view_allrequests.allrequests);

  adminrout
  .route('/admin/view_allmatched_requests')
  .get(urlencodedParser,view_allrequests.allmatched_requests);

  adminrout
  .route('/admin/view_allnotmatched_requests')
  .get(urlencodedParser,view_allrequests.allnotmatched_requests);



  adminrout
  .route('/admin/view_allstudents_aprove')
  .get(urlencodedParser,view_allstudents_aprove.allstudents_aprove);

  adminrout
  .route('/admin/admin/view_allstudents_aprove/approve_student/:student_id')
  .get(urlencodedParser,view_allstudents_aprove.allstudents_aproved);

  adminrout
  .route('/admin/admin/view_allscribe/blockscribe/:user_id')
  .get(urlencodedParser,view_allscribe.allscribe_block);

  adminrout
  .route('/admin/admin/view_allscribe/unblockscribe/:user_id')
  .get(urlencodedParser,view_allscribe.allscribe_unblock);





module.exports = adminrout;


//   .get(function(req,res){
  // res.render('./admin/admin_dashboard',{message:message})
//   });