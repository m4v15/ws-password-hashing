const handlers = {
  get: require('./handlers/get.js'),
  post: require('./handlers/post.js')
}

const routes = {
  'GET': {
    '/': handlers.get.home,
    '/register': handlers.get.register,
    '/login': handlers.get.login,
    '404': handlers.get.notFound,
    'public': handlers.get.public
  },
  'POST': {
    '/register': handlers.post.register,
    '/login': handlers.post.login,
  }
}

const router = (req, res) => {
  const { url, method } = req
  console.log(method, url)
  if (routes[method][url]) {
    routes[method][url](req, res);
  }
  else if (url.includes('/public/')) {
    routes['GET']['public'](req, res);
  }
  else {
    routes['GET'][404](req, res);
  }

}

module.exports = router;
