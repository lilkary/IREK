const express  = require("express")
const mongoose = require("mongoose")
const multer   = require("multer")
const router = require("./router/router")
const PORT     = process.env.PORT || 3000
const app      = express()

//Database conection
// const dbUri = "mongodb+srv://lilkary:987612345@irek.hppvv.mongodb.net/irek?retryWrites=true&w=majority"
// mongoose.connect(dbUri, {
//   useNewUrlParser: true, 
//   useUnifiedTopology: true

// }).catch(console.log)

// mongoose.connection.on("open", ()=> {
//   console.log("Database connected")
// })
// mongoose.connection.on("error", err => {
//   console.log(err)
// })


//Express middlewares

app.set("view engine", "pug")
app.use(express.urlencoded({ extended : true }))
app.use(express.json())
app.use(multer().array())
app.use(router)
app.use(express.static("public"))

app.listen(PORT, ()=> console.log("App listen in the port: " + PORT))