const redirect = (req, res, next) => {
  
  const host = req.hostname
  const url  = req.originalUrl 
  if(req.protocol == "http"){
    res.redirect(`https://${host}${url}`)
    return
  }
  next()
}

module.exports = redirect