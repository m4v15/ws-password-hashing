const qs = require('querystring')
const Store = require('data-store')
const db = new Store('db', { cwd: './' });


const bodyParser = (req, cb) => {
  var body = '';
  req.on('data', function (data) {
    body += data.toString();
  });
  req.on('end', function () {
    cb(qs.parse(body))
  });
}

const addUserToDatabase = (email, password, cb) => {
  const item = {}
  item[email] = password
  db.set(item)
  cb(null, true)
}

const getUserFromDatabase = (email, cb) => {
  const passwordInDatabase = db.get(email)
  cb(null, passwordInDatabase)
}

const register = (req, res) => {
  bodyParser(req, (body) => {
    addUserToDatabase(body.email, body.password, (err, result) => {
      if (err) res.end('Error registering')
      res.send('successfully registered!')
    })
  })
}

const login = (req, res) => {
  bodyParser(req, (body) => {
    getUserFromDatabase(body.email, (err, databasePassword) => {
      if (err) res.end('Error logging in')
      else {
        if (body.password === databasePassword) {
          res.end('Success Logging In!')
        } else {
          res.end('Invalid Username/Password combination')
        }
      }
    })
  })
}

module.exports = {
  register,
  login
}
