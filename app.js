const express  = require("express")
const mongoose = require("mongoose")
const session  = require("cookie-session")
const multer   = require("multer")
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

app.set("view engine", "pug")
app.use(express.urlencoded({ extended : true }))
app.use(express.json())
app.use(session({
  name: "session",
  keys: [
    "E91KUQY6zR$TyMSeWccP3FvamrG2r5Bp7Xr#PH!wQ8P8CgkzX624x9hhtN1%",
    "fm4yrgw6!E8rs%kX##xFP8%$v67U%5KvS6P$Nv^$%N3!pZbfq7Ynx5c9@ty6",
    "ubvejd9B$XnjVJEs$1a4%GGVS3@$z%Z!2GSWb&4th*@&Lteq96ffM7R2nEn9",
    "F1qc837ht9Gww1Cfn$#3@sm$9h$TCr%Bne&Gcs!xaQ8T6Ym62^f3hp#sm2fL",
    "U23ScyGdk9$vVR8ayDmkFTpc6&dkQXvdHU3e7mnk5ZM9A9Px9UMG917yR6@6",
    "jugpRg62EG7KcAfKmHWLwseX9!k#3s!Ff^j^qv&srLU2cM2GQDDx*T#qYg8n",
    "TGQhKj2e$GSG9CKrpr$Xj4EQVSN3vkjsjkWk6j@DH!$4WWV!bx$@qx7rQTNP"
  ]
  
}))


app.set("trust proxy", 1)
app.use(multer().array())
app.use(router)
app.use(express.static("public"))
app.use((_,res)=> {
  res.redirect("/invitado")
})
app.listen(PORT, ()=> console.log("App listen in the port: " + PORT))