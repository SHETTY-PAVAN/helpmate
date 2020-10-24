var mysql      = require('mysql');

var connection = mysql.createConnection({
  port     : '3308',
  host     : 'localhost',
  user     : 'pavan',
  password : '2452',
  database : 'helpmate'
});
connection.connect(function(err){
if(!err) {
    console.log("Database is connected");
} else {
    console.log("Error while connecting with database");
}
});
module.exports = connection; 

