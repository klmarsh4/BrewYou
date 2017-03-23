// func GetOne() {
//   session := db.GetSession()
//   c := session.DB("brewyou").C("Users")
//   c.Find(nil).One(&result)
//   delete(result, "_id")
//   return result
// }

var getOneUser = function(callback) {
  var MongoClient = require('mongodb').MongoClient, assert = require('assert');

  // Connection URL
  var url = "mongodb://<dbuser>:<dbpassword>@ds147985.mlab.com:47985/brewyou";
  // Use connect method to connect to the Server
  var user;
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    db.collection('Users').find({}).next(callback);
    db.close();
  });
}

module.exports.getOneUser = getOneUser
