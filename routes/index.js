const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Sarah Birch');
});
routes.get('/waheed', (req, res) => {
    res.send('Waheed Nazir');
  });
  routes.get('/ibrahim', (req, res) => {
    res.send('Ibrahim Waheed');
  });


module.exports = routes;