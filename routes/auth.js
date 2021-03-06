var jwt = require('jwt-simple');

var auth = {

  login: function(req, res) {

   
    var username = req.query.username || '';
    var password = req.query.password || '';

    console.log("USERNAME = ["+username+"], PASSWORD = ["+password+"]");
    if (username == '' || password == '') {
      res.status(401);
      res.json({
        "status": 401,
        "message": "Invalid credentials"
      });
      return;
    }

    // Fire a query to your DB and check if the credentials are valid
    var dbUserObj = auth.validate(username, password);
   
    if (!dbUserObj) { // If authentication fails, we send a 401 back
      res.status(401);
      res.json({
        "status": 401,
        "message": "Invalid credentials"
      });
      return;
    }

    if (dbUserObj) {

      // If authentication is success, we will generate a token
      // and dispatch it to the client
      var ret = genToken(dbUserObj);
      
      res.json(ret);
    }

  },

  validate: function(username, password) {
    // spoofing the DB response for simplicity
    
    var dbUserObj = { // spoofing a userobject from the DB. 
      name: 'marcelo',
      role: 'admin',
      username: 'marcelo@q.com'
      
    };

    return dbUserObj;
  },

  validateUser: function(username) {
    // spoofing the DB response for simplicity
    var dbUserObj = { // spoofing a userobject from the DB. 
      name: 'marcelo',
      role: 'admin',
      username: 'marcelo@q.com'

    };

    return dbUserObj;
  },
}

// private method
function genToken(user) {
  var expires = expiresIn(7); // 7 days
  var token = jwt.encode({
    exp: expires
  }, require('../config/secret')());

  return {
    token: token,
    errorCode: 0,
    expires: expires,
    user: user
  };
}

function expiresIn(numDays) {
  var dateObj = new Date();
  return dateObj.setDate(dateObj.getDate() + numDays);
}

module.exports = auth;
