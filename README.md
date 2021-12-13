
1. Intall mongo:
	https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

2. Intall node: 
	https://github.com/nodesource/distributions/blob/master/README.md
	
3. Start mongo (1.) 

4. (mongosh) Create db test and:
	db.hello1.insertOne({ x: "Hello World" })

5. test_mongo.js:

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
  dbo.collection("hello1").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.x);
    db.close();
  });
});

6. Install mySQL:

https://ubuntu.com/server/docs/databases-mysql

7. console mysql: sudo mysql -u root (https://phoenixnap.com/kb/how-to-install-mysql-on-ubuntu-18-04)

8. Create test database:
 - create table hello1
 - create database test
 - create table hello1 ( x VARCHAR(100))
 - insert into hello1 values ("hello world")
 - select * from hello1
 
 9. Create user (https://www.digitalocean.com/community/tutorials/how-to-create-a-new-user-and-grant-permissions-in-mysql)
  - CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password';
  - GRANT ALL PRIVILEGES ON * . * TO 'newuser'@'localhost';
 
 10. test_mysql.js:
 
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
 
 
