const pizzas = [
    {
    id: 1,
    nombre: "Napolitana", 
    ingredientes:
        [
            "1 prepizza",
            "Salsa de tomate",
            "Muzzarella",
            "Tomate en rodajas",
            "Ajo",
            "Orégano",
            "Aceituna",
        ],
    precio: 500, 
    },
    
    {
        id: 2,
        nombre: "Fugazzeta", 
        ingredientes:
            [
                "1 prepizza",
                "Salsa de tomate",
                "Parmesano",
                "Cebolla ",
                "Aceite",
            ],
        precio: 700, 
    }, 

    {
        id: 3,
        nombre: "King", 
        ingredientes:
            [
                "1 prepizza",
                "Salsa de tomate",
                "Muzzarella",
                "Beacon",
                "Huevo Frito",
            ],
        precio: 900, 
    }, 

    {
        id: 4,
        nombre: "Rucula", 
        ingredientes:
            [
                "1 prepizza",
                "Salsa de tomate",
                "Muzzarella",
                "Tomate en rodajas",
                "Rucula",
                "Jamon crudo",
            ],
        precio: 800, 
    }, 

    {
        id: 5,
        nombre: "Pepperoni", 
        ingredientes:
            [
                "1 prepizza",
                "Salsa de tomate",
                "Muzzarella",
                "Pepperoni",
            ],
        precio: 700, 
    }, 

    {
        id: 6,
        nombre: "Cuatro quesos", 
        ingredientes:
            [
                "1 prepizza",
                "Salsa de tomate",
                "Muzzarella",
                "Gorgonzola",
                "Fontina ",
                "Parmesano",
            ],
        precio: 1000, 
    }, 

    {
        id: 7,
        nombre: "Especial", 
        ingredientes:
            [
                "1 prepizza",
                "Salsa de tomate",
                "Muzzarella",
                "Morron",
                "Aceituna",
            ],
        precio: 1000, 
    },    
]


// a)  Las pizzas que tengan un id impar

// const pizzaImpar = pizzas.filter((pizza) => pizza.id % 2 !== 0)

// b) ¿Hay alguna pizza que valga menos de $600?

const pizzaPrecio = pizzas.find((pizza) => pizza.precio < 600)

// c) El nombre de cada pizza con su respectivo precio.

const pizzaNYP = pizzas.map((pizza) => {
    return {
      nombre: pizza.nombre,
      precio: pizza.precio
    }
  })


// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene un array de ingredientes.

for (let i = 0; i < pizzas.length; i++) {
    console.log(`Ingredientes de la ${pizzas[i].nombre}:`)
    for (let j = 0; j < pizzas[i].ingredientes.length; j++) {
      console.log(`${[j + 1]}: ${pizzas[i].ingredientes[j]}`)
    }
}


//console.log(`Las pizzas que tienen un id impar son las siguientes: ${pizzaImpar.map((pizza) => `${pizza.nombre} con el id ${pizza.id}`)}`)
//console.log(`La pizza ${pizzaPrecio.nombre} tiene un valor de ${pizzaPrecio.precio}`)
//pizzaNYP.map((pizza) => console.log(`La ${pizza.nombre} sale $${pizza.precio}`))


// E2 //

 const numero=document.getElementById("number")
 const form=document.getElementById("formulario")
 const boton=document.getElementById("button")
 const result=document.getElementById("name")
 const precio=document.getElementById("price")

 const showPizza = () => {
     const number = parseInt(numero.value);
     const pizza = pizzas.find(pizza => pizza.id === number);

    if (pizza){
         result.innerHTML = `La pizza ${pizza.nombre}`;
         precio.innerHTML = `tiene el valor de $${pizza.precio}`;
     }
    else if(numero.value === ""){
        result.innerHTML = `Por favor, ingrese un numero`;
         precio.innerHTML = ``;
    }
    else {
         result.innerHTML = `No hay ninguna pizza con el id #${number}`;
         precio.innerHTML = ``;
 } 
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    showPizza();
  })




