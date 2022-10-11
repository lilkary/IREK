
module.exports = (req, res, next) => {
  if(!req.session._id){
    res.redirect("/#login")
  }else{
    next()
  }
}