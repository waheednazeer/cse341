const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Sarah Birch');
});
routes.get('/waheed', (req, res) => {
    res.send('Waheed Nazir');
  });

module.exports = routes;