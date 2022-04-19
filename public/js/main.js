const id = Id => document.getElementById(Id)
const $  = Q  => document.querySelector(Q)
const $all  = Q  => document.querySelectorAll(Q)

HTMLElement.prototype.$ = function(q){
  return this.querySelector(q)
}
HTMLElement.prototype.$all = function(q){
  return this.querySelectorAll(q)
}


const Form   = id("new_user")
const Inputs = Array.from(Form.$all(".input"))

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

  console.log(res)
  if(res.message){

    id("alert_message").$("span").innerHTML = res.message //Write message in the alert
    id("alert_message").classList.add("open") //Open message

    setTimeout(() => { //CLose message in 4 seconds
      id("alert_message").classList.remove("open")
    }, 4000);
    return
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
}

//Database save user
id("new_user").onsubmit = event => {
  event.preventDefault()
  const Data = new FormData(event.target)

  fetch("/new-user", { //Send data 
    method: "POST",
    body: Data
  })
  .then( res => res.json())
  .then(ResErrorValidator)
}