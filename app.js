const express  = require("express")
const mongoose = require("mongoose")
const multer   = require("multer")
const bcrypt   = require("bcryptjs")
const router = require("./router/router")
const PORT     = process.env.PORT || 3000
const app      = express()

//Database conection
const dbUri = "mongodb+srv://lilkary:987612345@irek.hppvv.mongodb.net/irek?retryWrites=true&w=majority"
mongoose.connect(dbUri, {
  useNewUrlParser: true, 
  useUnifiedTopology: true

}).catch(console.log)

mongoose.connection.on("open", ()=> {
  console.log("Database connected")
})
mongoose.connection.on("error", err => {
  console.log(err)
})


//Express middlewares

app.use(express.urlencoded({ extended : true }))
app.use(express.json())
app.use(multer().array())
app.use(express.static("public"))
app.use(router)

app.listen(PORT, ()=> console.log("App listen in the port: " + PORT))