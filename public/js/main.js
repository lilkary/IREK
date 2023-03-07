onload = () => {

const id = Id => document.getElementById(Id)
const $  = Q  => document.querySelector(Q)
const $all  = Q  => document.querySelectorAll(Q)

HTMLElement.prototype.$ = function(q){
  return this.querySelector(q)
}
HTMLElement.prototype.$all = function(q){
  return Array.from(this.querySelectorAll(q))
}


const Form   = id("login")
const Inputs = Form.$all(".input")

//Input class change for animation
const InputAnimation = (input) => {
  if(input.value === '')
    input.parentElement.$("label").classList.toggle("labelup")
}

//Inputs set class for animation
Inputs.forEach(input => {

  input.$("input").onfocus = ({target: input}) => {
    InputAnimation(input)
  }
  input.$("input").onblur = ({target: input}) => {
    InputAnimation(input)
  }
});


//Open, close menu mobile
id("icon").onclick = () => {
  id("icon").classList.toggle("open")
  id("nav" ).classList.toggle("open")
}

id("nav").onclick = () => {
  id("icon").classList.toggle("open")
  id("nav" ).classList.toggle("open")
}


const ResErrorValidator = res => {
  const ErrSpan = Array.from($all(".message-err"))
  ErrSpan.forEach( span => {
    span.textContent = ''
  })

  if(res.redirect){

    location.href = res.redirect
    return true
  }
  
  if(res.message){

    id("alert_message").$("span").innerHTML = res.message //Write message in the alert
    id("alert_message").classList.add("open") //Open message

    setTimeout(() => { //CLose message in 4 seconds
      id("alert_message").classList.remove("open")
    }, 4000);
    return true
  }

  if(res.err.name){
    id("name_err").textContent = res.err.name
  }
  if(res.err.password){
    id("password_err").textContent = res.err.password
  }
  if(res.err.email){
    id("email_err").textContent = res.err.email
  }
  if(res.err.edad){
    id("edad_err").textContent = res.err.edad
  }
  return false
}

id("switch_form").onclick = ({target: span}) => {
  
  const status = span.textContent
  
  if(status == "Iniciar sesión"){

    id("form-title").textContent = "Iniciar sesión"
    id("submit").value           = "Entrar"
    id("Age").style.display      = "none"
    id("Name").style.display     = "none"
    id("action").value           = "/login"
    span.textContent             = "No tengo cuenta"

  }else{

    id("form-title").textContent = "Regístrate"
    id("submit").value           = "Regístrarse"
    span.textContent             = "Iniciar sesión"
    id("Age").style.display      = ""
    id("Name").style.display     = ""
    id("action").value           = "/new-user"
  }
}

const ValidateForm = formData => {
  
  const Data = formData
  const errors = {err: {}}
  const emailRegex = /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

  if(
      Data.get("name").length <= 1 
      && Data.get("action") == "/new-user"
      ){
        errors.err.name = "Nombre no valido"
  }

  if(Data.get("email").length < 1)
    errors.err.email = "El email no puede estar vacío"

  else if(!emailRegex.test(Data.get("email"))){
    errors.err.email = "Email no valido"
  }

  if(Data.get("password").length < 8){
    errors.err.password = "La contraseña tiene menos de 8 carácteres"
  }

  if(
    parseInt(Data.get("edad")) < 13 
    && Data.get("action") == "/new-user"
    || Data.get("edad").length < 2
    && Data.get("action") == "/new-user"
  ){
      errors.err.edad = "Edad minima: 13 años"
  }

  if(Object.keys(errors.err).length < 1){
    return true
  }
  return ResErrorValidator(errors)
}

//Database save user
id("login").onsubmit = event => {
  event.preventDefault()
  const Data = new FormData(event.target)
  const uri  = Data.get("action")

  if(ValidateForm(Data) !== true) return 

  fetch(uri, { //Send data 
    method: "POST",
    body: Data
  })
  .then( res => res.json())
  .then(ResErrorValidator)
}
}
