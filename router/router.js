const validator = require("../middlewares/data.validation")
const express   = require("express")
const bcrypt    = require("bcryptjs")
const router    = express.Router()
const User     = require('../database/models')
router.all("/new-user", validator)


router.post("/new-user", async (req, res)=> {

  try {
    
    const Data = req.body
    const Password = await bcrypt.hashSync(Data.password, 12)
  
    const user = new User({
      name : Data.name,
      email: Data.email,
      edad : Data.edad,
      password: Password
    })
  
    await user.save()
      
    res.send({
      message: "Se registró correctamente. <br> estaremos disponibles muy pronto"
    })

  } catch (error) {

    if(error.code == 11000){
      res.send({
        err: { email: "Correo ya registrado"}
      })
      return
    }
    res.send({
      message: "Lo sentimos, error interno"
    })
  }
  
})



router.get("/", (req, res)=> {
  res.render("portfolio")
})
router.get("/invitado", (req, res)=> {
  res.render("home")
})

module.exports = router