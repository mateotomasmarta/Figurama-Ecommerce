
const productos= [{
    id: "1",
    name:"lucario",
    price: 2000,
    category: "pokemon",
    img: "https://placehold.co/300x400",
    stock: 5,
    description: "figura de accion de lucario, pokemon tipo lucha"
    },
    {
    id: "2",
    name:"ironman",
    price: 1000,
    category: "marvel",
    img: "https://placehold.co/300x400",
    stock: 5,
    description: "figura de accion de ironman, heroe de marvel"
    },
    {
    id: "3",
    name: "goku super saiyan",
    price: 3500,
    category: "dragonball",
    img: "https://placehold.co/300x400",
    stock: 8,
    description: "figura de accion de goku en su transformacion super saiyan"
    },
    {
    id: "4",
    name: "charizard",
    price: 4200,
    category: "pokemon",
    img: "https://placehold.co/300x400",
    stock: 3,
    description: "figura de accion de charizard, pokemon tipo fuego y volador"
    },
    {
    id: "5",
    name: "master chief",
    price: 5800,
    category: "videojuegos",
    img: "https://placehold.co/300x400",
    stock: 6,
    description: "figura de accion de master chief, protagonista de halo"
    }
];

//funcion para simular q estoy trayendo algo de mi db
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    });
};