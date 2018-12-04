const Store = require('data-store')
const db = new Store('db', { cwd: './' });

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

module.exports = {
  getUserFromDatabase,
  addUserToDatabase
}