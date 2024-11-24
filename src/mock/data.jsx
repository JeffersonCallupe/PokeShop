const productos = [
    {
      id: 1,
      name: 'Pokebola clásica',
      category: 'Pokebola',
      price: 100,
      img: 'https://i.postimg.cc/kgrJ57vC/pokeball-Clasic.webp',
      description: 'La Pokébola clásica es el modelo más básico de todas. Utilizada por entrenadores principiantes y veteranos por igual, es la herramienta esencial para capturar Pokémon salvajes. Aunque tiene una tasa de captura modesta, su disponibilidad y bajo costo la convierten en una opción confiable para capturar Pokémon comunes o de nivel bajo. Es la base del entrenamiento Pokémon y símbolo icónico de la franquicia.'
    },
  
    {
      id: 2,
      name: 'SuperBall',
      category: 'Pokebola',
      price: 200,
      img: 'https://i.postimg.cc/qqhrkFtg/superball.jpg',
      description: 'La SuperBall es una versión mejorada de la Pokébola estándar, diseñada para ofrecer una mayor probabilidad de captura. Con una tasa de éxito aproximadamente dos veces mayor que la Pokébola clásica, es ideal para capturar Pokémon más fuertes o aquellos que tienden a escapar fácilmente. Su diseño distintivo azul y rojo refleja su poder mejorado, lo que la convierte en una excelente opción intermedia para entrenadores en ascenso.'
    },
  
    {
      id: 3,
      name: 'UltraBall',
      category: 'Pokebola',
      price: 300,
      img: 'https://i.postimg.cc/RZQBVK01/ultraball.jpg',
      description: 'La UltraBall es una Pokébola de alto rendimiento, reconocida por su tasa de captura significativamente superior. Es especialmente eficaz para atrapar Pokémon raros o de alto nivel que son difíciles de capturar con Pokébolas comunes. Su diseño negro y amarillo simboliza su potencia avanzada, y es indispensable para entrenadores que se enfrentan a desafíos mayores en su viaje. Es la opción preferida para capturas difíciles en las etapas avanzadas.'
    },
  
    {
      id: 5,
      name: 'EnteBall',
      category: 'Pokebola',
      price: 400,
      img: 'https://i.postimg.cc/2yZppBJZ/enteball.jpg',
      description: 'La EnteBall es una Pokébola especial diseñada específicamente para capturar Ultraentes, criaturas extraordinarias de dimensiones alternativas. Su diseño futurista y su eficacia superior al enfrentarse a estos Pokémon únicos la convierten en una herramienta crucial para los entrenadores que exploran más allá del mundo conocido. Aunque es menos efectiva contra Pokémon normales, su especialización la hace invaluable en encuentros interdimensionales.'
    },
  
    {
      id: 6,
      name: 'HonorBall',
      category: 'Pokebola',
      price: 500,
      img: 'https://i.postimg.cc/2jZ8NqnG/honoball.jpg',
      description: 'La HonorBall es una Pokébola rara que se entrega como obsequio en ocasiones especiales, generalmente como un bono al comprar otras Pokébolas. Su diseño elegante y totalmente blanco la hace distintiva. Aunque su tasa de captura es la misma que la Pokébola clásica, su valor simbólico y su estética refinada la convierten en un artículo de colección muy apreciado por los entrenadores y coleccionistas.'
    },
  
    {
      id: 7,
      name: 'MasterBall',
      category: 'Pokebola',
      price: 1000,
      img: 'https://i.postimg.cc/nhHHm0gS/masterball.jpg',
      description: 'La MasterBall es la Pokébola definitiva, con una tasa de captura del 100%. Es la herramienta más poderosa para cualquier entrenador, ya que garantiza capturar al Pokémon que se desee, sin importar su nivel o dificultad. Su diseño morado y blanco con una "M" característica simboliza su exclusividad y poder. Debido a su rareza, generalmente se reserva para Pokémon legendarios o encuentros cruciales donde el fallo no es una opción.'
    },

    //POKEMONES 
    {
      id: 8,
      name: 'Pikachu',
      category: 'Pokemon',
      price: 1500,
      img: 'https://i.postimg.cc/ydSBK53x/pikachu-removebg-preview.png',
      description: 'Pikachu, un Pokémon de tipo Eléctrico, es conocido por sus habilidades de descarga eléctrica. Es el compañero más famoso y símbolo de la franquicia.'
    },
    {
      id: 9,
      name: 'Charmander',
      category: 'Pokemon',
      price: 1800,
      img: 'https://i.postimg.cc/pXvxNsWV/charmander.png',
      description: 'Charmander es un Pokémon de tipo Fuego. Su cola siempre está encendida, y la intensidad de la llama refleja su estado de ánimo y salud.'
    },
    {
      id: 10,
      name: 'Bulbasaur',
      category: 'Pokemon',
      price: 1700,
      img: 'https://i.postimg.cc/XYDTvLbC/BULBASAUSA.webp',
      description: 'Bulbasaur es un Pokémon de tipo Planta/Veneno. Lleva una semilla en su espalda que crece a medida que él lo hace.'
    },
    {
      id: 11,
      name: 'Squirtle',
      category: 'Pokemon',
      price: 1750,
      img: 'https://i.postimg.cc/wx0FHvHt/1200px-Squirtle-SSBU.png',
      description: 'Squirtle es un Pokémon de tipo Agua. Utiliza su caparazón para protegerse y puede disparar potentes chorros de agua.'
    },
    {
      id: 12,
      name: 'Jigglypuff',
      category: 'Pokemon',
      price: 1600,
      img: 'https://i.postimg.cc/LsLNM36R/dgwunxw-bb7b51fd-c501-4b4f-925b-ef736a9639cf.png',
      description: 'Jigglypuff es un Pokémon de tipo Normal/Hada. Tiene la habilidad de cantar canciones de cuna que adormecen a sus oponentes.'
    },
    {
      id: 13,
      name: 'Gengar',
      category: 'Pokemon',
      price: 2500,
      img: 'https://i.postimg.cc/d1JmcMxm/dgahk79-6c5141b7-5001-4a97-a23d-f26f896678a0.png',
      description: 'Gengar, un Pokémon de tipo Fantasma/Veneno, es conocido por su naturaleza traviesa y su habilidad para ocultarse en las sombras.'
    },
    {
      id: 14,
      name: 'Eevee',
      category: 'Pokemon',
      price: 2000,
      img: 'https://i.postimg.cc/02hY2K4N/133.png',
      description: 'Eevee es un Pokémon de tipo Normal con múltiples evoluciones posibles, adaptándose a diferentes entornos.'
    },
    {
      id: 15,
      name: 'Mewtwo',
      category: 'Pokemon',
      price: 5000,
      img: 'https://i.postimg.cc/Pqj11sTs/150.png',
      description: 'Mewtwo, un Pokémon legendario de tipo Psíquico, es producto de experimentos genéticos. Es extremadamente poderoso y reservado.'
    },
    {
      id: 16,
      name: 'Lucario',
      category: 'Pokemon',
      price: 3000,
      img: 'https://i.postimg.cc/Jh5Zq6zy/DpKhrdL.png',
      description: 'Lucario es un Pokémon de tipo Lucha/Acero que puede sentir y manipular la "aura" de otros seres vivos. Es valiente y leal.'
    },
    {
      id: 17,
      name: 'Snorlax',
      category: 'Pokemon',
      price: 2800,
      img: 'https://i.postimg.cc/j5qNkHDM/b3084b1ce3c1af6e9a730b29ea0e4912.jpg',
      description: 'Snorlax es un Pokémon de tipo Normal, conocido por su amor por la comida y su tendencia a dormir profundamente. Posee una gran fuerza física.'
    },

    // OBJETOS  

    {
      id: 19,
      name: 'Baya Pinia',
      category: 'Objeto',
      price: 200,
      img: 'https://i.postimg.cc/y8qRz4Jg/202061210474841-7.jpg',
      description: 'La Baya Pinia es una baya dorada con un sabor exótico que duplica la cantidad de caramelos obtenidos al capturar un Pokémon. Es ideal para entrenadores que desean evolucionar o fortalecer a sus Pokémon rápidamente. Su uso estratégico puede acelerar el proceso de colección de caramelos, facilitando la obtención de evoluciones raras o poderosas.'
    },
    {
      id: 20,
      name: 'Baya Latano',
      category: 'Objeto',
      price: 180,
      img: 'https://i.postimg.cc/CKSfzGsw/202061210474841-6.jpg',
      description: 'La Baya Latano tiene un efecto calmante, lo que reduce los movimientos de un Pokémon salvaje durante una captura. Es perfecta para aquellos Pokémon que tienden a moverse mucho o esquivar las Pokébolas. Al ser alimentados con esta baya, los Pokémon se vuelven más fáciles de capturar, mejorando la precisión del lanzamiento.'
    },
    {
      id: 21,
      name: 'Poción',
      category: 'Objeto',
      price: 120,
      img: 'https://i.postimg.cc/R0dJfWgK/202061210474841-9.jpg',
      description: 'La Poción es un ítem básico de curación que restaura 20 puntos de salud (PS) a un Pokémon herido. Es fundamental para mantener a los Pokémon en forma durante combates prolongados o para recuperarse después de enfrentamientos difíciles. Cada entrenador debería tener una buena reserva de pociones para asegurarse de que su equipo esté siempre listo para luchar.'
    },
    {
      id: 22,
      name: 'Superpoción',
      category: 'Objeto',
      price: 250,
      img: 'https://i.postimg.cc/85CJbTY3/202061210474841-10.jpg',
      description: 'La Superpoción es una versión avanzada de la poción estándar, capaz de restaurar 50 puntos de salud (PS) a un Pokémon herido. Es especialmente útil durante combates más intensos o después de batallas contra rivales poderosos. Tener superpociones en el inventario puede marcar la diferencia entre la victoria y la derrota en momentos críticos.'
    }

  ];
  


// promesa a exportar 

export const getProducts = () =>{
    let error = false;
    return new Promise ( (resolve, reject) =>{
        setTimeout ( () =>{
            error ? reject ('Hubo un error') : resolve(productos)
        },2000)
    } )

} 



export const oneGetProduct = (id) =>{
    let error= false;
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(!error){
                const product = productos.find( item => item.id === id )
                resolve(product)
            }else{
                reject('No hay data-producto')
            }
        }, 2000);
    })
}



