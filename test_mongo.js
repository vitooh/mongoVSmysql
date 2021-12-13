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
