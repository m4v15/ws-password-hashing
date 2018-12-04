const qs = require('querystring')
const queries = require('../database/queries.js')


const register = (req, res) => {
  var body = '';
  req.on('data', (data) => {
    body += data.toString();
  });
  req.on('end', () => {
    const { email, password } = qs.parse(body)
    // PART 1: Change the code below here!
    // We should not be storing the password as plain text!

    queries.addUserToDatabase(email, password, (err, result) => {
      if (err) {
        res.end('Error registering')
        return
      }
      res.end('successfully registered!')
    })
  });
}

const login = (req, res) => {
  var body = '';
  req.on('data', (data) => {
    body += data.toString();
  });
  req.on('end', () => {
    const { email, password } = qs.parse(body)
    // PART 2: Change the code below here to check the password is correct
    // If it is we should send 'Logged in'
    // If not we should say 'Invalid Username/Password combination'

    queries.getUserFromDatabase(email, (err, databasePassword) => {
      if (err) {
        res.end('Error logging in')
        return
      }
      res.end('Success Logging In!')
    })
  })
}

module.exports = {
  register,
  login
}
