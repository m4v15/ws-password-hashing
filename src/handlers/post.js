const qs = require('querystring')
const queries = require('../database/queries.js')

const login = (req, res) => {
  var body = '';
  req.on('data', (data) => {
    body += data.toString();
  });
  req.on('end', () => {
    const { email, password } = qs.parse(body)
    queries.getUserFromDatabase(email, (err, passwordInDatabase) => {
      if (err) {
        res.statusCode = 500;
        res.end('Error logging in')
        return
      }
      // PART 1 - check the passwords match before sending in logged in message!
      res.statusCode = 200;
      res.end('Success Logging In!')
    })
  })
}

const register = (req, res) => {
  var body = '';
  req.on('data', (data) => {
    body += data.toString();
  });
  req.on('end', () => {
    const { email, password } = qs.parse(body)
    // PART 2: Change the code below here!
    // We should not be storing the password as plain text!
    // We will also now need to change the log in code above (that you changed in part 1) so that it can compare a hashed password...

    queries.addUserToDatabase(email, password, (err, result) => {
      if (err) {
        res.statusCode = 500;
        res.end('Error registering')
        return
      }
      res.statusCode = 200;
      res.end('successfully registered!')
    })
  });
}

module.exports = {
  register,
  login
}
