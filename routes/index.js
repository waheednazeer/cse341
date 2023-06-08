const routes = require('express').Router();
const lesson1Controller= require('../controllers/lesson1') 

routes.get('/', lesson1Controller.shakiraRoute);

routes.get('/waheed', lesson1Controller.waheedRoute);
  routes.get('/ibrahim',lesson1Controller.ibrahimRoute);
  routes.get('/maryam', lesson1Controller.maryamRoute);


module.exports = routes;