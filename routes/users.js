import express from 'express'
let router = express.Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('ruta usuarios :D!');
});

/* 
crear ruta post, (endpoint + funcion async)
.
.
.
.
*/

export default router
