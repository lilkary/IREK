const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

 
open.onclick = () => modal_container.classList.toggle("show")
close.onclick = () => modal_container.classList.toggle("show")