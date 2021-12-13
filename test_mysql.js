var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "newuser",
  password: "password",
  database: "test"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM hello1", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
