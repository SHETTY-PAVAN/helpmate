var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');


var message ="";


var connection = require('./config');
var admin = require('./routes/admin');

var signin = require('./controlers/signin');
var scribesignup = require('./controlers/scribesignup');
var studentsignup = require('./controlers/studentsignup');
var pinrequest = require('./controlers/pinrequest.js');
var request = require('./controlers/request.js');
var posts =  require('./controlers/posts.js');
var applay = require('./controlers/applay.js');
var contactus =require('./controlers/contactus.js');
var student_posthistory=require('./controlers/student_posthistory.js')
var deletepost =require('./controlers/deletepost.js');

var app = express();


var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine','ejs');
app.use('/asset',express.static('asset'));
app.use('/admin',admin);
app.use(bodyParser.json());

app.use(session({
  
  resave:false,
  saveUninitialized:false,
  secret:'PAVAN',
  cookie: {
    maxAge:1000*60*60*10,
    sameSite:true,
    
  }
}))

const redirectstudentlogin = (req,res,next) =>{
   if(!req.session.studentId)
   {
     res.redirect('/signin')
   }
   else{
     next()
   }
}

const redirectuserlogin = (req,res,next) =>{
  if(!req.session.userId)
  {
    res.redirect('/signin')
  }
  else{
    next()
  }
}

const redirectpage = (req,res,next) =>{
  if(req.session.studentId)
  {
    res.redirect('/studentpage');
  }
  else if(req.session.userId)
  {
    res.redirect('/scribepage');
  }
  else{
    next()
  }
}


app.get('/home',function(req, res){
  req.session.destroy(function(err) {
    console.log('loged out');
    res.redirect('/');
    
 });
});




app.get('/',redirectpage,function(req, res){
  res.render('index')
});

app.get('/signin',function(req, res){
  
  res.render('signin',{message:message})
});

app.get('/scribe_signup',function(req, res){
  res.render('scribe_signup',{message:message})
});

app.get('/student_signup',function(req, res){
  res.render('student_signup',{message:message})
});

app.get('/contactus',function(req, res){
  res.render('contactus',{message:message})
});

app.get('/studentpage',redirectstudentlogin,function(req,res){
  
  res.render('studentpage',{message:message})
});

app.get('/scribepage',redirectuserlogin,function(req,res){
  
  res.render('userpage',{message:message})
});
app.get('/aboutus',function(req,res){
  
  res.render('aboutuss',{message:message})
});
app.get('/student_pending_page',function(req,res){
  var message_m = "Your Account is Pending for approvel"
  res.render('student_pending_page',{message:message_m})
});

app.get('/scribe_pending_page',function(req,res){
  var message_m = "Your Account is Blocked"
  res.render('student_pending_page',{message:message_m})
});




app.post('/contactusdb',urlencodedParser,contactus.contactus)

app.post('/signin',urlencodedParser,signin.signin);

app.post('/newscribepage',urlencodedParser,scribesignup.signup);

app.post('/newstudent',urlencodedParser,studentsignup.signup);

app.post('/requestpage',urlencodedParser,pinrequest.pin);

app.get('/student_posthistory',urlencodedParser,student_posthistory.posthistory);

app.get('/scribe_posthistory',urlencodedParser,redirectuserlogin,student_posthistory.scribe_posthistory);

app.post('/request',urlencodedParser,request.request);
app.get('/user/posts',urlencodedParser,posts.post);
app.get('/user/posts/applay/:request_id',urlencodedParser,redirectuserlogin,applay.examapplay);
app.get('/student/deletepost/:request_id',urlencodedParser,redirectstudentlogin,deletepost.deletep);


app.listen(8888);