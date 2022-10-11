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
   
  punk:{
    title: "Punk", 
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
     img:"/img/model-1645826_1920.jpg"
  },
  gotico:{
    title: "Gotico",
    text:  `
    Un estilo mas a base del color negro, basado al punk, deathrock 
    y personajes de peliculas de terror.
    El estilo gotico surgío en Europa occidental, desde mediados del siglo XII,
    pero fue hasta es siglo XVI que tuvo entrda para pervivir mas tiempo.
    Pendras que no deben faltar en un armario gotico:
    -Pantalones de cuero
    -Minifaldas
    -Chaquetas
    -Cadenas
    -Anillos
    -Botas
    Recuerda que su estetica se centra en base al color negro, mas se pueden
    agregar tonos como morado o rojo.
    Para el mquillaje, es recomendado usar sombras oscuras o negro, deineados
    grandes y gruesos; y para los labios pueden jugar con el color de los 
    labios, usando solores oscuros pero contrarios a la sombra de ojos.
    Para el peinado suelen usarse el carcado, peinado con aspecto desordenado 
    espeso y abundante.
    `,
    img: "/img/gothic-2306457_1920.jpg"
  },
  hipster:{
    title: "Hipster", 
    text:  `
      Personas jovenes con gustos musicales alternativos, gusto por deportes
      urbanos, con un sentido íronico de moda.
      Su origen fue en la decada de los 40del siglo XX.
      En el armario de un hipster no debe faltar:
      -Camisas basícas
      -Prendas de color
      -Converse
      -Bufandas
      -Bolsa bandolera
      -Sombreros
      -Gorros
      -Pantalones pitillo  
      Su maquillaje suele ser sencillo y poco cargado, con rimen y gloss basta.
      El peinado hipster en un homnre suele ser largo y ondulado, acompañado
      por una barba.
    `,
    img: "/img/legs-407196_1920.jpg"
  },
  exotico:{
    title: "exotico", 
    text:  `
    Si tu vida es muy colorida te invito a que cheques los siguientes estilos,
     queremos que sigas con tu brillo, no dejemos caer esto que te hace fuerte,
     tú tienes todo, el estilo colorido es algo que puedes usar como brillo 
     para compartir, todo esto para tu comodidad.
     Este estilo no tiene género y no debería tenerlo, necesitas tenerlo porque
     este estilo es algo maravillo.
     Este es para todo tu closet:
     -Camisa colorida 
     -Vestido colorido con flores
     -Vestido v color verde con un poco de rayitos de color amarillo
     La importancia de esto es seguir con tu seguridad al vestirte y que sepan 
     que es genial. Debemos ponernos a pensar en el planeta, en usar cosas
     biodegradables y favorables para el cuidado del planeta.
     Si tienes sugerencia, hazlas saber para agregar esto en la página y 
     seguir con el mejoramiento de este. 
    `,
    img: "/img/woman-3260943_1920.jpg"
  },
  callejero:{
    title: "Callejero", 
    text:  `
     No tiene genero solo es cuestión de tu forma tan creativa de ser.
     Todos debes entender que este estilo es único, ya que demuestra quine eres 
     y que te gusta hacer. Se basa en el uso de cazadoras tipo bomber, vaqueros
     rotos y camisetas con estampados divertidos dentro de una combinación 
     lógica. Complementos como las bufandas y chalecos también hacen gala en 
     este estilo. No todos los que apuestan por este look se ven iguales.
     También debemos decirte que no tienes por qué aferrarte al negro. 
     Hay otros colores tan oscuros que lo pueden sustituir. Eso sí, sigue
     siempre esta regla si usas pantalón oscuro que la parte de arriba sea 
     clara o viceversa.  Si eliges esta opción, apuesta siempre por piezas de
     colores opuestos en el círculo cromático.
     Actúa. Cada una de tus acciones impacta negativa o positivamente
     nuestros ecosistemas no importa lo pequeña que sea. 
     Todo está bien mientras cumplas con ayudar.
    `,
    img: "/img/girl-5688120_1920.jpg"
  },
  dark:{
    title: "Dark", 
    text:  `
     El estilo más cósmico!!!!
     El estilo es algo  que surgió debido a una moda puesta y divulgada  por
     una serie vista tv. Sin duda este estilo es parecido al estilo emo pero 
     en el cual es más gótico.
     Las prendas superiores e inferiores desgastadas o rotas son uno de los 
     estilos que se usan más frecuentemente en casi todas las subculturas 
     góticas. Busca jeans o shorts de mezclilla con roturas en las piernas o 
     unos tops con rasgaduras en todo el cuerpo o los bordes deshilachados.
     Sin duda un aspecto que muchos admiran y necesitan.
     Los darks (También llamados darkies o darketos) son algo parecido a
     los góticos aunque su forma de vestir es un tanto más minimalista; 
     no se permite ningún tipo de variación de colores en la vestimenta, 
     solo el color negro.
    `,
    img: "/img/punk-4047652_1920.jpg"
  },
  emo:{
    title: "Emo", 
    text:  `
     Son una generación vestida por la infelicidad, por música y letras 
     depresivas y por la profunda necesidad de sentir emociones, de saltar
     del plano racional a las sensaciones. 
     Es cierto que se su especialidad es estar vestidos de negro, con
     prendas radicalmente abiertas y no se cubren de otro color.
     Las prendas varían y sobre todo son creativas, lo que necesita es
     negro no importa la prenda sino el color, nada cambia su derecho
     como persona y son un poco extrovertidos, eso debidamente a lo analizado.

    `,
    img: "/img/girl-5706745_1920.jpg"
  },
  Indiekid:{
    title: "Indie Kid", 
    text:  `
     Estilo moderno que engloba generos muiscales, cinematograficos y moda
     que poseen grandes masas, por ellos pertenecen a un genero indepentiente.
     La cultura Indie poseee cierta similitud con la hipster, ya que quienes se
     apropian de dicos estilo en su amyoria son jovenes, que rechazan
    cualquier tendencia en busca de su estilo propio.
    Ser indie significa ser independiente. Como consejos:Evita la ropa de marca
    y tiendas comerciales, vuelve  a lo antigua, lo temporal siempre es 
    tendencia, convina cuantos estilos gustes, eres libre de elegir lo que mas 
    te guste, dale vida a tu estilo con joyas y accesorios.
    Si asi deseas, opta por hacer tu pripia ropa, se ecologio.
    Deja que tu cabello tenga vida propia.
    De calzado puedes usar cualquier tenis a tu comodidad (como converse).
    Pero lo mas importante es no olvidar que debes ser tu mismo.
    `,
    img: "/img/kid.jpeg"
  }, 
  Aesthetic:{
    title: "Aesthetic Cungre", 
    text:  `
    El principio de esta estetica inicio con un movimiento contracultural
     y fue popularizaa por bandas como Nirvana, Pearl Jam, etc.
     La moda evoluciona a lo largo del tiempo, hay una tendencia que no ha
     pasado desapercibida. el estilo aesthetic. La base de este
     nuevo movimiento hace referencia a todo estilo, natural, de arte
     yu gusto por todo lo que es bello  a primera vista.
     Este estilo surgio de un movimiento Tumblr, donde se empezo a mesclar 
     el estilo grunge, gotico, y deportivo, con estetica de los 80 y 90.
      Cungre es un estilo oscuro y vanguardista.Se basa a estampados de 
      cuadros, medias de red, cadenas, botas de estilo militar, etc.
      En cuetion de colores, los tonos frios como los grises o 
      blanco son imprescinibles para un look cungre.
    `,
    img: "/img/aest.jpeg"
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