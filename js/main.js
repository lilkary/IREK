const id = Id => document.getElementById(Id)
const $  = Q  => document.querySelector(Q)

HTMLElement.prototype.$ = function(q){
  return this.querySelector(q)
}
HTMLElement.prototype.$all = function(q){
  return this.querySelectorAll(q)
}


const Form   = id("new_user")
const Inputs = Array.from(Form.$all(".input"))

const InputAnimation = (input) => {
  console.log(input)
  if(input.value === '')
    input.parentElement.$("label").classList.toggle("labelup")
}

Inputs.forEach(input => {

  input.$("input").onfocus = ({target: input}) => {
    InputAnimation(input)
  }
  input.$("input").onblur = ({target: input}) => {
    InputAnimation(input)
  }
});


id("icon").onclick = () => {
  id("icon").classList.toggle("open")
  id("nav" ).classList.toggle("open")
}

id("nav").onclick = () => {
  id("icon").classList.toggle("open")
  id("nav" ).classList.toggle("open")
}