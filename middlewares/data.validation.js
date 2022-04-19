const emailRegex = /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

const validator = (req, res, next) => {

  const err = {}
  body = JSON.parse(JSON.stringify(req.body))
  req.body = body
  if(body.name === ""){

    err.name = "El nombre no puede estar vacio"
  }
  if(!emailRegex.test(body.email)){
    
    err.email = "Email invalido"
  }
  if(body.password.length < 8){
    
    err.password = "Minimo 8 caracteres"
  }
  if(body.edad < 13){
      err.edad = "Tu edad es menor a 13"
  }
  
  if(Object.keys(err).length >= 1){
    res.send({err: err})
    return
  }
  next()
  
}

module.exports = validator