import express from 'express'
import User from '../models/User.js'
let router = express.Router()

/* GET users listing. */
router.get(
  '/',
  (req,res) => { 
      //console.log(req)
      return res
          .status(200) 
          .send('aca vemos los usuarios') 
  }
)
/* crear ruta post, (endpoint + funcion async)*/
router.post('/', async (req,res) => { 
  try{ 
    let user = await User.create(req.body) 
    return res.status(201)
              // .send("BRAVO SE CREO CORRECTAMENTE")
               .json({ 
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

