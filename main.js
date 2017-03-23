var users = require('./users/getUser');
users.getOneUser(function(_, user){
  console.log(user)
})
