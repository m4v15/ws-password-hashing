const fs = require('fs');
const path = require('path');
const qs = require('querystring')
const Store = require('data-store')
const db = new Store('db', { cwd: './' });


const extensionType = {
  'html': 'text/html',
  'js': 'application/javascript',
  'css': 'text/css'
}


const general = (name) => (req, res) => {
  let filePath = path.join(__dirname, '..', '..', 'public', `${name}.html`);
  fs.readFile(filePath, function (error, file) {
    if (error) {
      console.log(error);
    }
    else {
      res.writeHead(200, { 'content-type': 'text/html' });
      res.end(file);
    }
  })
}

const home = general('index')
const register = general('register')
const login = general('login')


//Create handler for public files
const public = (req, res) => {
  //Handler Variables
  let url = req.url;
  let extension = url.split('.')[1];
  let filePath = path.join(__dirname, '..', '..', url);
  fs.readFile(filePath, function (error, file) {
    if (error) {
      console.log(error);
      return;
    }
    else {
      res.writeHead(200, { "content-type": extensionType[extension] });
      res.end(file);
    }
  })
}

//Create 404 handler
const notFound = (req, res) => {
  res.writeHead(404, { 'content-type': 'text/plain' });
  res.end('page not found');
}

module.exports = {
  home,
  register,
  login,
  public,
  notFound
}
