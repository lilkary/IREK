const id = Id => document.getElementById(Id)
const $  = Q  => document.querySelector(Q)
const $all  = Q  => document.querySelectorAll(Q)

HTMLElement.prototype.$ = function(q){
  return this.querySelector(q)
}
HTMLElement.prototype.$all = function(q){
  return Array.from(this.querySelectorAll(q))
}


const styles = {
  clasic: {
    title: "Clásico", 
    text: `
    Estilo elegante, discreto y de alta calidad.
    El cual que la persona que lo usa el refinado con autoconfianza y seguridad.
    Se considera ropa clásica aquella del siglo XX,  más sin embargo ropa de 1960 a 1970 clasifica en este estilo.
    Recomendamos tener en tu armario las siguientes prendas:
    -Ropa de varios colores
    -Ropa con cierres
    -Camisas blancas
    -Vestidos o faltas negras
    -Jeans
    -Tacones
    
    Si eres hombre, en tu hermano nunca debe faltar:
    -Camisa blanca
    -Polo
    -Jeans oscuros 
    -Zapatos marrones
    -Caquetá 
    -Corbata
    
    El estilo presentado no tiene algún maquillaje específico, más que tenemos algunos consejos para complementar tu outfit con maquillaje:
    comentamos usar maquillaje de ojos en tono café, para las pestañas es una cantidad excesiva de anime para darle volumen y hacerlas más largas, en los labios recomendamos el color rojo.
    
    Sobre los peinados de buscan atrevidos, alegres, que aparentan sencillez para eventos informales, algunos de estos son peinados con rizos o ondulaciones con volumen
  `,
  img: "https://lastendenciasdeyaneth.files.wordpress.com/2018/01/estiloclasico-e1514916149457.jpg?w=1130&h=651&crop=1"
  },
  casual:{
    title: "Casual", 
    text:  `
    Un estilo cómodo sencillo y adecuado para cualquier situación.
    El estilo casual surgió en el siglo XX en Estados Unidos, con el objetivo de que nuestra ropa se ajuste a las actividades diarias y tengamos la comodidad de realizarlas.
    
    A continuación estas son algunas prendas del estilo casual que no deben faltar en tu armario si eres mujer:
    -Jeans
    -Blusas básicas 
    -Camisas básicas 
    -Vestidos sencillos
    -Tenis
    -Zapatos de piso
    
    Para complementar tu outfit puedes integrar accesorios como bolsos o sombreros dándole un toque de estilo sin perder la comodidad.
    
    Para el armario de un hombre se aconseja tener las siguientes prendas:
    -Pantalones vaqueros 
    -Camisa básica 
    -Chaquetas
    -Bombers
    -Zapatos comodos
    -Gafas de sol
    
    
    Ahora sobre maquillaje que se suele usar para tu estilo te tenemos algunos consejos:
    para darle color a tu piel sin usar base, prueba un bloqueador solar o crema con color, te recomendamos delineados pequeños y elegantes, complementa ensinando y colocando rímel transparente negro en tus pestañas y para los labios te recomendamos colores claros o brillo labial.
    
    Por último, te presentamos algunos peinados en base al estilo casual:
    -Chongos
    -Trenzas
    -Medio suelto
  `,
  img: "https://c.pxhere.com/photos/30/5c/man_model_fashion_male_young_people_person_portrait-643924.jpg!d"
  },
  
  hippie: {
    title: "Hippie",
    text: `
      Moda alternativa, creativa y original usando materiales orgánicos y prendas holgadas dando una vista despreocupada estilo contracultura y liberador.
      El estilo hippie nace en los años 60 en Estados Unidos, conociéndose por sus manifestaciones.
      
      En tu hermano no debe faltar:
      -Vestidos sueltos
      -Chalecos flojos
      -Faldas 
      -Camisas flojas 
      -Sandalias
      -Pantalones acampanados
      -Pulseras o collares coloridos
      
      En el estilo hippie nos es el usar maquillaje ya que se busca demostrar que somos hijos de la tierra.
      
      Y para el peinado el cabello es largo tanto en hombre como en mujer, como accesorio una diadema de manera horizontal sobre la frente o también puedes considerar hacerte rastras.
    `,
    img:"https://cdn.pixabay.com/photo/2015/07/13/02/52/girl-842719_960_720.jpg"
  },
   
  casual:{
    title: "Casual", 
    text:  `
     Estilo que surge para dejar darle vida al color negro.
     El estilo punk surgío en los años 70 en Inglaterra, comenzando como un 
     movimiento musical, tras la rebelion del rock industrial.
     Dicha revelión contaba en su mayoria con etras de protesta al anarquismo,
     autogestion y en contra de la religión.
     Estas son las prenda ue no deben faltar en tu armario base al punk:
     -Chaqueta vaquera
     -Camisa desgastada
     -Chaqueta de cuero
     -Pantalones pitillo 
     -Botas
     Recuerda que todo en base al color negro, tambien buscando una vista
     desgastada en sus prendas.
     Como accesorios, las cadenas, aretes, tirantes y corbatas son la mejor 
     opción.
     En el maquillaje debe resaltar un delineado gureso, que de 
     protagonismo a los ojos, creando dramatismo en la mirada.
     Para un buen peinado, en su mayoria se observa el corte mohawk, 
     corte  que se basa en rapar ambos lados de la cabeza, dejando
     solamente una franja de cabellos al centro.
     `,
     img:"https://pixabay.com/es/photos/retrato-personas-mujer-uno-3036880/.jpeg"
  }

}
setStyleView = (data) => {
  const style = id("style")
  style.$("img").src        = data.img
  style.$("h2").textContent = data.title
  style.$("p").textContent  = data.text
}

const stylesContainer = $(".styles_container .container ")

id("back").onclick = _ => {
  id("stylesView").classList.remove("open")
}

stylesContainer.$all(".style").forEach(style => {

  style.onclick = () => {

    id("stylesView").classList.add("open")
    setStyleView(styles[style.id])
  }
})