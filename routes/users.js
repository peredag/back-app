import express from 'express'
import User from '../models/User.js'
let router = express.Router()

/* GET users listing. */
/* router.get('/', function(req, res, next) {
  res.send('ruta usuarios :D!');
}); */
router.get(
  '/', /* endpoint a concatenar con el endpoint del enrrutador principal */
  (req,res) => { /* funcion que se va a ejecutar cada vez que se llame al endpoint */
      //console.log(req)
      return res
          .status(200) /* 200: exito para la lectura */
          .send('aca vemos los usuarios') /* send envía mensajes al cliente */
  }
)

/* 
crear ruta post, (endpoint + funcion async)
*/
router.post('/', async (req,res) => { 
  try{ 
    let user = await User.create(req.body) 
    return res.status(201).json({ 
      success: true, 
      user: user, 
      id: user._id 
    })
  } catch(error){ 
    console.log(error) 
    return res.status(400).json({ 
      success: false, 
      message: 'no se pudo crear' 
    })
  } 
})

export default router

