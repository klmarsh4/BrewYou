var getOneUser = function() {
  var MongoClient = require("mongodb").MongoClient,
  assert = require("assert")
  co = require("co");

  // Connection URL
  var url = "mongodb://<dbuser>:<dbpassword>@ds147985.mlab.com:47985/brewyou";
    // Use connect method to connect to the Server
  co(function*() {
    var user;
    const db = yield MongoClient.connect(url)//, (err, db) => {
    //assert.equal(null, err);
    console.log("Connected correctly to server");
    var user = yield db.collection("Users").find({}).limit(1).toArray();
    console.log(user)
    db.close();
  }).catch(function(err) {
    console.log(err.stack);
  });
}

module.exports.getOneUser = getOneUser
