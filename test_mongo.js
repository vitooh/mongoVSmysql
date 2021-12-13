var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var startTime = performance.now()

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
  dbo.collection("hello1").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.test);
    db.close();
  });
});

var endTime = performance.now()

console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)
