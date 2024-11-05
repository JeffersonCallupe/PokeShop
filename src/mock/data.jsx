
const productos = [

    {
        id: 1,
        name: 'Pokebola clásica',
        category: 'pokebola',
        price: 100,
        img: './pokeballClasic.jpg'
    },

    {
        id: 2,
        name: 'SuperBall',
        category: 'pokebola',
        price: 200,
        img: './superball.jpg'
    },

    {
        id: 3,
        name: 'UltraBall',
        category: 'pokebola',
        price: 300,
        img: './ultraball.jpg'
    },

    {
        id: 5,
        name: 'EnteBall',
        category: 'pokebola',
        price: 400,
        img: './enteball.jpg'
    },

    {
        id: 6,
        name: 'HonorBall',
        category: 'pokebola',
        price: 500,
        img: './honoball.jpg'
    },

    {
        id: 7,
        name: 'MasterBall',
        category: 'pokebola',
        price: 100,
        img: './masterball.jpg'
    }

]



// promesa a exportar 

export const getProducts = () =>{
    let error = false;
    return new Promise ( (resolve, reject) =>{
        setTimeout ( () =>{
            error ? reject ('Hubo un error') : resolve(productos)
        },2000)
    } )

} 





