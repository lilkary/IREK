const id = Id => document.getElementById(Id)
const $  = Q  => document.querySelector(Q)
const $all  = Q  => document.querySelectorAll(Q)
const template = id("template_comment")
let lastStyle = ""

HTMLElement.prototype.$ = function(q){
  return this.querySelector(q)
}
HTMLElement.prototype.$all = function(q){
  return Array.from(this.querySelectorAll(q))
}

const printComment = (comment) => {
  const commentText = comment.comment.split(" ")
    const commentNode = document.importNode(template.content, true)
    const likeAmount = commentNode.querySelector(".ammount")
    commentNode.querySelector("img").src = comment.user_image
    commentNode.querySelector(".user_name").innerText = comment.user_name 
    commentNode.querySelector(".ammount").textContent = comment.like_ammount.length -1 
    commentNode.querySelector(".like").onclick = async () => {
      if(location.href.includes("/app")){

        const newLikeAmount = await (await fetch(`/app/commets-likes/${comment._id}`)).text()
        likeAmount.textContent = newLikeAmount
      }else{
        location.href = "/#login"
      }
    }

    if(commentText.lenght > 60){
      const visibleText = document.createTextNode(commentText.slice(0, 60).join(" "))
      const details = document.createElement("DETAILS")
      const summary = document.createElement("SUMMARY")
      const summaryText = document.createElement("SPAN")
      const hiddenText = document.createElement("P")

      summaryText.textContent = "Ver más"
      summary.appendChild(summaryText)

      hiddenText.textContent = commentText.slice(60).join(" ")
      details.appendChild(summary)
      details.appendChild(hiddenText)

      commentNode.querySelector(".text").appendChild(visibleText)
      commentNode.querySelector(".text").appendChild(details)
    }else{
      commentNode.querySelector(".text").textContent = comment.comment
    }
    id("comment_container").appendChild(commentNode)
}

const styles = {
  clasic: {
    title: "Clásico", 
    text: `
    Estilo elegante, discreto y de alta calidad.
    El cual que la persona que lo usa el refinado con autoconfianza y seguridad.
    Se considera ropa clásica aquella del siglo XX,  más sin embargo ropa de 
    1960 a 1970 clasifica en este estilo. Recomendamos tener en tu armario
    las siguientes prendas:
    Ropa de varios colores, ropa con cierres, camisas blancas, vestidos o 
    faltas negras, jeans, tacones.
    Si eres hombre, en tu armario nunca debe faltar:
    Camisas blancas, polo, jeans oscuros, zapatos marrones, caquetas,
    corbatas.
    
    El estilo presentado no tiene algún maquillaje específico, más 
    que tenemos algunos consejos para complementar tu outfit con maquillaje:
    comentamos usar maquillaje de ojos en tono café, para las pestañas 
    es una cantidad excesiva de anime para darle volumen y hacerlas más largas,
    en los labios recomendamos el color rojo.
    
    Sobre los peinados de buscan atrevidos, alegres, que aparentan
    sencillez para eventos informales, algunos de estos son peinados
    con rizos o ondulaciones con volumen.
  `,
  img: "https://lastendenciasdeyaneth.files.wordpress.com/2018/01/estiloclasico-e1514916149457.jpg?w=1130&h=651&crop=1"
  },
  casual:{
    title: "Casual", 
    text:  `
    Un estilo cómodo sencillo y adecuado para cualquier situación.
    El estilo casual surgió en el siglo XX en Estados Unidos, con
    el objetivo de que nuestra ropa se ajuste a las actividades 
    diarias y tengamos la comodidad de realizarlas.
    
    A continuación estas son algunas prendas del estilo casual que
    no deben faltar en tu armario si eres mujer:
    Jeans, blusas básicas, camisas básicas, vestidos sencillos, tenis,
    zapatos de piso.
    
    Para complementar tu outfit puedes integrar accesorios como bolsos
    o sombreros dándole un toque de estilo sin perder la comodidad.
    
    Para el armario de un hombre se aconseja tener las siguientes prendas:
    Pantalones vaqueros, camisa básicas, chaquetas, bombers, aapatos comodos,
    gafas de sol.
    
    Ahora sobre maquillaje que se suele usar para tu estilo te tenemos
    algunos consejos: para darle color a tu piel sin usar base, prueba un 
    bloqueador solar o crema con color, te recomendamos delineados pequeños
    y elegantes, complementa ensinando y colocando rímel transparente negro en 
    tus pestañas y para los labios te recomendamos colores claros o brillo 
    labial.
    Por último, te presentamos algunos peinados en base al estilo casual:
    Chongos, trenzas y medio suelto.
  `,
  img: "https://c.pxhere.com/photos/30/5c/man_model_fashion_male_young_people_person_portrait-643924.jpg!d"
  },
  
  hippie: {
    title: "Hippie",
    text: `
      Moda alternativa, creativa y original usando materiales orgánicos
      y prendas holgadas dando una vista despreocupada estilo contracultura
      y liberador.
      El estilo hippie nace en los años 60 en Estados Unidos, conociéndose
      por sus manifestaciones. En tu armario no debe faltar:
      Vestidos sueltos, chalecos flojos, faldas, camisas flojas, sandalias,
      pantalones acampanados, pulseras y collares coloridos.
      
      En el estilo hippie nos es el usar maquillaje ya que se busca
      demostrar que somos hijos de la tierra.
      Y para el peinado el cabello es largo tanto en hombre como en mujer,
      como accesorio una diadema de manera horizontal sobre la frente o 
      también puedes considerar hacerte rastras.
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
     Chaqueta vaquera, camisa desgastada, chaqueta de cuero, pantalones pitillo 
     y botas.
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
    Pantalones de cuero, minifaldas, chaquetas, cadenas, anillos
    y botas.
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
      Camisas basícas, prendas de color, converse, bufandas, bolsa bandolera,
      sombreros, gorros, pantalones pitillo  
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
     Camisas coloridas, vestidos coloridos con flores y vestidos de colores 
     verdes con un poco de rayitos de color amarillo son las prendas más basicas,
     las cuales deberias tener en tu aramrio si este estilo es el que te 
     representa.
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
    `
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
    `
  }, 
  Boho:{
    title: "Boho", 
    text:  `
    Estilo romántico, comodo y original. Se presenta 
    como un estilo muy personal, creativo y relajado,
     este estilo apuesta por diseños fluidos, colores y
      accesorios sencillos que nos trasladan a la naturaleza.
    Boho se puso a la moda desde los 60 hasta los principios
     de los 70 y a pesar de no ser tan visto ya, hoy en día 
     resaltan derivantes como "Boho chic" y "hippie chic".
    Para alguien que su estilo es el boho en su armario no 
    deben faltar prendas de hilo, tejido vaquero o crochet, 
    cortes fluidos y largos, prendas con toques campesinos, 
    accesorios como sombreros y bolsas; todo esto con el fin 
    de dar un look libre a su espíritu.
    Juegan con paletas de colores marrones y tostados.
    Y para su cabello usan peinados desordenados como trenzas,
     cabello ondulado y moños "Messy".
    `
  }, 
  Egirl:{
    title: "Egirl/boy", 
    text:  `
    Comunidad de adolescentes que cumplen con una estética grunge.
    Esta tendencia de moda surge en  tiktok, dandose a conocer primero 
    el estilo de las chicas, más a pesar de esto comparten 
    rasgos con los e-boys por ejemplo el amor a los videojuegos.
    Una chica dentro de este estilo viste a falda plisada, pantalón 
    de tiro alto, playera de manga larga, sudaderas holgadas, crop 
    top y tennis; mientras que los chicos usan vaqueros, sudaderas 
    y cadenas colgando ambos siempre dentro de una paleta de colores 
    blanco negro.
    En los chicos es común ver las uñas de negro, cabello despeinado
     y un estilo despreocupado,  las chicas llevan pelo suelto, 
     en su mayoría cortes de moda.
    `
  }, 
  ArtHoe:{
    title: "Art Hoe", 
    text:  `
    Un estilo que va de la mano con la creatividad, 
    surgío en 2015 y fue creado para romper estereotipos 
    de genro, raciales y de clase. 
    Quienes forman parte de este estilosuelen ser 
    amantes del arte, son creativos, les gusta leer y 
    disfrutan de escribir.
    Suelen usar ropa comoda, pans, overoles, blusas flojas, 
    en su mayoria ropa con estampados y llena de vida.
    En su armaria no pueden faltar los momjeans, ya que con ellos
    expresan su creatividad y libertad, ademas de que son 
    sencillos de cambiar y combinar.
    Las prendas a rayas les encantan, así como los converse, las camaras,
    bolsos y más.
    `,

  }, 
  Urbanic:{
    title: "Urbanic", 
    text:  `
    Estilo que persigue la modernidad y el caracter urbanita.
    Este estilo toma base de otro estilo tendencia de los 90, el 
    urbanic chic nos traslada a la segunda decada del siglo XXI.
    Algunos ejemplos de las mejores prendas para vestir conforme
    al urbanic chic sería los mini vestidos, pantalones
    anchos, camisas blancas, tacones, gafas de sol, estampados alegres,
    a rayas o/y tonos blancos.
    ¡Urbanic Chic es lo comodo, util, sencillo y actual!
    `
  }, 
  mini:{
    title: "Minimalista", 
    text:  `
    Tejidos, cortes sencillos y colores neutros es la base perfecta para 
    aplicar en nuestras vidas el estilo minimalista.
    Estilo el cúal comienza a destacar en los 90, busca un estilo sobrio,
    elegante y sencillo. El estilo minimalista esta lejos de ser un 
    estilo aburrido, se basa a las ñíneas rectas y figuras 
    geometricas convirtiendose en un total arte.
    Sus prendas basicas son los trajes (a pantalón y chaqueta), jeans rectos,
    faldas rectas, gabardinas, zapatillas deportivas, zapatos de salón,
    botas al tobillo y como accesorios ten presente siempr la frase:
    "Menos es más"
    Si deseas complementar usa cadenas en color blanco o plateado.
    `
  }, 
  cotta:{
    title: "Cottagecore", 
    text:  `
    Estilo basado a la vida rural, vinculado a la pureza de
    la vida en el exterior, campo y naturaleza.
    Estilo romantico, con base a los colores pastel, se dio a conocer
    a partir del año 2020, más su origen viene del siglo XVIII en Francia.
    Para cumplir con este estilo se observan cuellos babe, vestidos midi y
    mangas con volumén. Vestidos volados, colores claros, encajes, estampados
    de flores y faldas vichy.
    Para complementar con accesarios puedes usar sombreros y cestas de paja.

    Abrigos de cuadro, botas camperas y zapatos comodos.
    `
  }, 
  sporty:{
    title: "Sporty", 
    text:  `
    El estilo sporty surgio durante el siglo XX, más se logro establecer a 
    finales  de los 90 y principios de los 2000.
    Siendo que el estilo surgío principalmente para mujeres, los
    hombres que han probado este estilo se han encontrado con gran comodidad
    incluyendolo a sus vidas.
    La palabra sporty nace de los terminos ingleses "deportivo" y "elegante",
    buscando combinar prendas deportivas y darles un toque de glamour, 
    luciendo elegante, comodo y cool.
    Algunos puntos clave para vestir sporty que puedes seguir son: elegir
    una prenda deportiva e incluirla al look, usar prendas formales(blazers,
    vestidos, trajes), deja a un lado el miedo a incluir en tus outfits 
    prendas que creas no convinan(cazadoras, chaquetas, beisboleras,sudaderas,
    minifaldas, faldas midi, pans).
    Recuerda que el estilo sporty busca un look a la moda, pero a su vez
    comodo, ya que el lucir bien va de la mano con la comodidad. 
    `
  }, 
  fancy:{
    title: "Fancy", 
    text:  `
    Fancy, un estilo que es principalmente visto en chicas, se reconoce 
    a simple vista, ya que es destacable la elegancia, sotisficación y
    extrabagancia de quienes portan tal estilo, similar al "clasico" 
    pero de un nivel más alto.
    Es uno nos de los estilos que mas se ven dia a dia, ya que es facil cautivar y
    dar a simple vista una impresión de particularidad, no obstante,
    es uno de los estilos mas alto en precios.
    Potar dicho estilo va mas alla a usar prendas y joyas caras,
    se debe tener un buen gusto, actitud, educacion y una buena clase social.
    Tambien es importante reconocer que el sobreexplotarnos cargandnos de
    accesorios y joyas caras no nos dan un estilo fancy, recordemos la famosa frase
    "menos es más" un collar delgado y aretes no voluminosos haran lucir mucho 
    mejor tu outfit, esta regla tambien aplica en maquillajes, si bien, hay
    miles de estilos donde el maquillaje es punto central, en el fancy no es 
    así, pta por mquillajes naturales t rutinas de skincare.
    Otra regla al vestir fancy es tener pleno conocimiento de que va con tu
    persona, la colorimetria, morflogía y visagismo.
    Usar prendas tales como blazers, americanas, vestidos, palazos, gabardinas,
    tacones y mules es una de las formas en que más se representa este estilo.
    Como ultimos consejos, mejora tu postura, evita usar prendas de distinta
    talla a la tuya y sobre todo cuida tus modales y elegancia. 
    `
  }, 
  grunge:{
    title: "Grunge", 
    text:  `
    Estilo inspirado en la banda de rock clasico popularmente conocida
    "Nirvana", surge a finales de los 80 e inicios de los 90, y se le 
    otorga el nombre de estilo "Grunge".
    Fue en base a dicho estilo la forma en que millones de personas
    expresaban disconformidad contra algunas normas, mostrandose al mundo 
    con un estilo rebelde y libre.
    Mediante este estilo los fans de este genero muiscal transmitian
    las emociones que la musica provocaba en ellos. Para vertir al estilo 
    "Grunge" te aconsejamos siempre tener las siguientes prendas: Camisas 
    de cuadro,  pantalones rotos, camisas sin manga, botas militares, 
    cazadoras, botas track, sudaderas overzise, chaquetas de cuero y gorros
    de lana estilo beanie. Algunas de las anteriores prendas pueden contener 
    frases llamativas y alusivas al rock.
    La colorimetria basica del "grunge" es facl de reconocer, sus 
    principales colores suelen ser negro, gris y rojo.
    Este estilo cuenta con celebridades iconicas que nos inspiran a vestir
    grunge, como lo son Chris Cornell, Kurt Cobain, Layne Staley y Eddie 
    Veder.
    `
  }, 
  edgy:{
    title: "Edgy", 
    text:  `
    Se desconoce la fecha en la que este estilo cautivo y se 
    incluyo a la forma de vida de miles de personas, pero se 
    conoce que para 1837 se utilizaba la palabra "edge" significandose "hacer
    algo irracional" o "estar al borde" de la cúal proviene el nombre
    "edgy". 
    Hpy en día se conoce que este estilo es provocativo, audaz, cool y
    obscuro; no solo basado a la forma de vestir, sino, tambien a personajes 
    y dibujos. Basado en usar prendas rockeras, imcorporando prendas de cuero,
    terciopelo, botas con accesorios llamativos como cadenas con 
    calaveras o tachuelas.
    Estilo comodo y atractivo, perfecto para usarse en distintas ocasiones,
    ya sea para trabajar, como hasta parasalir a una cita o de fiesta.
    La prenda principal de este estilo es la chaqueta de cuero, más puede
    ser sustituida por alguna  de jeans o camisas con estampados rockeros.
    Como en el estilo "grunge" el "edgy" cuenta con iconos que nos 
    inspiran a vestir edgy, tales como la famosa cantante Miley Cyrus,
    usando este estilo principalmente para su día a día.
    `
  }, 
  girly:{
    title: "Girly girl", 
    text:  `
    Como lo menciona el nombre, el estilo "Girly girl" toma base en 
    mostrarse femenina, delicada y de cierta froma, conservando la imagen 
    de la mujer perfeta.
    Este estilo super femenino y dulce se inspira en la decada de los 50's y 
    los 60's.
    Colores en tonos pastel (rosa, verde y celeste), prendas clasicas,
    encajes, vestidos de gasa, estampados, calcetines de perlé, faldas, tops, 
    zapatos y botas de tacón, bolsas, diademas y tocados para el cabello son 
    las prendas que caracterizan y nunca pueden faltar en el armario de una chica 
    "grily girl".
    Algo caracteriztico de este estilo es el parecido que se puede llegar a
    tener con muñecas, gracias al maquillaje t prendas que se suelen usar.
    No obstante, dentro de este cada chica tiene la libertad de darle su toque
    personal, original, creativo y unico.
    Como en otros estilos, en este dominan, inspiran y representan el 
    "girly girl" algunos famosos como: Taylor Swift, Alicia Vikander y 
    Kiernan Shipka.
    `
  }, 
  y2k:{
    title: "Y2K", 
    text:  `
    Y2K, el estilo que hoy en día conocemos en base a un error informatico
    del año 1999. Year two kilo (año dos mil) es como se nombra al desastre 
    cibernetico que ponia en riesgo la seguridad financiera de todo
    el mundo tras descubrir que las computadoras no reconocian el cambio de año.
    Cosa que afortunadamente no ocurrio, mas sin embargo el estilo "Y2K" llego
    de la mao con guerras, cambio climatico, he incluso pandemias. 
    Odiado ppor muchos y amado por otros, teniendo que batallar con etiquetas 
    que la sociedad le ha clasificado, como "horrible", "dificil de entender" 
    "sin chiste"; más tambien recibe cometarios positivos como "comodo" y 
    "natural".  Colores neón, pantalones de tiro bajo, hombligueras, zapatos 
    con enormes plataformas (chunky), pantalones holgados, cardigans y 
    accesrios como gafas coloridas, gorros bucket, cinturones anchos, mini
    carteras, aros, uñas postisas, maquillajes con delineados graficos,
     trenzas desvanecidos y peinados despeinados son parte (visible) de como 
     viste un "Y2K".
    `
  }, 
  artsy:{
    title: "Artsy", 
    text:  `
    Nada mejor que la combinación de la moda y el arte, un claro ejemplo
    de esto es el estilo "artsy", el cúal se encuntra muy lejos de las
    tendencias tradicionales en la moda, destacando por sus diseños 
    diferentes gracias a la idea de que cada individuo persive y representa su
    propia idea de lo que es el arte. 
    Artsy ya estaba presente, más fue hasta despúes de la pandemia que los
    estampados y colores de este estilo resaltaron en las pasarelas.
    Un buen estampado es la clave para dar energía a cualquier look, para 
    llevar este estilo discretamente solo basta con incluir una prenda "artsy"
    a tu outfit, más tienes la libertad de crear outfits totalmente arriesgados,
    coloridos y llamativos.
    Como se esperaba, "artsy" cuenta con grandes colaboraciones marcando el 
    mundo de la moda, como las que fueron con los vestidos Mondrian en las
    conocidas tiendas de "Prada".
    En este apartado no damos consejos para vestir "artsy" ya que el estilo 
    habla y se trata de que tu expreses tu punto de vista del arte, solo 
    recuerda ¡Explota tu closed con estampados y colores!
    Arriesgate, no tengas miedo a gritarle al mundo tus gustos y 
    personalidad. 
    `
  }, 
  mezclilla:{
    title: "Mezclilla", 
    text:  `
    La entrada a las prendas para vestir de la mezclilla fue a finales
    del año 1800, usandose como traje de trabajo para los mineros, paso a 
    lucirse en peliculas clasicas y finalmente se convirtio en uno de los
    looks más clasicos en la historia de la moda.
    A pesar de los notables cambios y nuevas apariencias de estilos, la 
    mezclilla es de las pocas que se mantiene en temporada.
    No obstante y aunque parezca uma prenda o moda cacíl de manejar, su 
    buena conbinación es complicada y lleva algunas reglas.
    Para portar un look con estilo debemos aprender a escoger colores,
    estilos y complementos.
    Algunas reglas basicas son:  No vestir de un color muy claro si todo
    el conjunto es a base de mezclilla, usar mezclilla de distintos pesos,
    tomar en cuenta las proporciones de cada prenda. 
    Dentri del estilo de la mezclilla se conocen los siguientes looks:
    Canadian Tuxeado, alto contraste, con capas, juego de colores
    y romper con chaqueta.
    `
  }, 
  cholo:{
    title: "Cholo", 
    text:  `
    Más que un estilo, el ser cholo es considerado una subcultura o estilo
    de vida, este se origino en los Angeles en la decada de 1960.
    Esta subcultura se ha extendido a diversas ciudades de Estados Unidos, 
    México, Nogales y Japón.
    Hablando de vestimenta, el ser cholo se asocia a usar combinaciones de 
    camisas de tartán, franeta o Pendletón sobre camisetas blancas o sin mangas
    , pantalones chaqui o shots holgados con calcetines largos, tenis 
    blancos, gafas de sol, cadenas y como es representativo, un pañuelo atado 
    al rededor de la cabeza.
    En hombres es común ver el cabello corton peinado hacía atras o la 
    cabeza afeitada, mientras que en mujeres los peinados dominantes so 
    las chomgas, copete y cabello lacio suelto.
    El cholo, una necesidad y estilo lleno de empoderamiento, estilo que 
    conyeva contras ya que comunmente se excluyen y rechazan ofertas laborales.
    No olvides, más que un estilo, el ser cholo es una subcultura.
    `
  }, 
  old:{
    title: "Old Money", 
    text:  `
    Old money, estilo que ha arrasado con las redes sociales estos ultimos
    años(21-22)inspirado para vestir de un estilo de hace 20 años,
    conquistando el sentido de la moda de muchos jovenes.
    El estilo se encuentra en un nivel economico alto, ricos por así decirse.
    Dentro del "old money" existe diversos apartados, como el "Mood Board"
    vistiendo a faldas de tabla, calcetines altos, polos y pañuelos.
    Otras prendas basicas de este estilo son las americanas de estilo
    hipica, polos con reminisciencias, minifaldas, cashmere, pantalón de pinzas
    , mocasines, collares de perlas y pañuelos los cuales son de gran importancia
    ya que en el pasado eran usados por chicas mas preppy.
    Como otros estilos, algunas celebridades que aportan y muestran al mundo el
    estilo "Old Money" son la famosa familia Kardashan, Olivia Palermo, Audrey
    Hepburn y la Princesa Diana.
    `
  },
  romantico: {
    title: "Romantico",
    text: `
    Tierno, refinado y ligero es lo que caracteriza y nos ayuda a distinguir de
    los démas el estilo "romantico". 
    El origen de este estilo se presenta en la Grecia Clasíca, pero no fue hasta
    el siglo XIX que se populariso.
    Figuras femeninas, de alma y estirítu libre, soñadores y con una vida de
    colores son los que representan este estilo.
    El "romantico" es por lo general usado mas en las estaciones del año 
    primavera-verano, más se puede adaptar a cualquier estación del año.
    Estampados, lazos, mangas abullonadas y tejidos satinados son las texturas 
    que más se ven. Algunas prendas basicas son la blusa de volante, vestidos 
    romanticos y nlusas con volumén.
    No olvides la importancia que tiene la paleta de color, siendo el 
    blanco y los tonos pastel sus colores base.
    Una gran representación del estilo "romantico" fué sin duda Lady di.
    `
  },
  
  creativo: {
    title: "Creativo",
    text: `
      Es el estilo que plasma la idea de un individuo, creativa, diferente,
      arriesgada, aventurada y con ideas convencionales proyectando a cada 
      persona.
      Quien es parte de este estilo busca transmitir originalidad en sus 
      prendas. Siendo capaz de fluir en el caos para encontar ideas.
      Como el nombre lo dice, la creatividad al momento de vestir sobra,
      pertenecer a este estilo es realmente no pertenecer a ninguno, ya que se
      da a la libertad de convinar y manipular prendas a gusto propio.
      Personas que se proyectan diferentes y extrovertidas, tanto para
      vestir como en su forma de pensar.
      Como se menciona, al vestir cada uno de ellos se proyecta, evitando
      vestirse como la mayoria, más sin embargo, el no tener limites les 
      podria traer problemas.
      Colores, cortes asimetricos(en cabello y ropa), maquillajes,
      aretes grandes, calcetines decorados o coloridos, estanpados, moños
       he incluso tatuajes son mayormente vistpos dentro de este estilo,
       más debes recordar que pertener a no tener limites ni reglas en el ambito
       de la moda trata de que experimente y transmitas tu propio estilo al mundo.
    `
  }


}

setStyleView = async (data, background, __id) => {
  const style = id("style")
  style.$(".img").style.backgroundImage = background
  style.$("h2").textContent = data.title
  style.$("p").textContent  = data.text
  id("comment_container").innerHTML = ""
  //Print comments
  const comments = await (await fetch(`/comments/${__id}`)).json()
  comments.forEach(printComment)
}

const addComent = async () => {

  if(!location.href.includes("/app")){
    location.href = "/#login"
    return
  }

  const comment = id("new_comment").value
  const body = JSON.stringify({comment, style: lastStyle})

  const commentSend =  await ( await fetch("/app/new-comment", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body
  })).json()
  printComment(commentSend)
  id("new_comment").value = ""
}
//Add comment
id("send_comment").onclick = addComent
id("new_comment").onkeyup = (e) => {
  if(e.key == "Enter"){
    addComent()
  }
}

const stylesContainer = $(".styles_container .container ")

id("back").onclick = _ => {
  id("stylesView").classList.remove("open")
}

stylesContainer.$all(".style").forEach(style => {

  style.onclick = () => {

    id("stylesView").classList.add("open")
    lastStyle = style.id
    setStyleView(styles[style.id], style.style.backgroundImage, style.id)
    history.pushState(null, "", style.id)
  }
})

window.addEventListener("popstate", () => {

  if(location.href.includes("invitado") || location.href.includes("home")){
    id("stylesView").classList.remove("open")
    return
  }
  console.log("AAAAAAAAA")
  const endUri = location.href.split("/").pop()
  const endWithoutHash = endUri.split("#")[0]
  const style = id(endWithoutHash)
  console.log(style)
  setStyleView(styles[style.id], style.style.backgroundImage, style.id)
  
})