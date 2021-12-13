var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "newuser",
  password: "password",
  database: "test"
});
var startTime = performance.now()

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM hello1", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  con.end(function(err) {
  // The connection is terminated now
  });
  });
});
var endTime = performance.now()

console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)
