const { createStore } = require("redux");
const contador = require("./reducer");
const { incremento, decremento } = require("./actions");

const buttonMas = document.getElementById("incremento")
const buttonMenos = document.getElementById("decremento")
const incremetarImpar = document.getElementById("incrementoImpar");
const incremetarAsync = document.getElementById("incrementoAsync");


// En esta línea creamos nuestro store. Pasándole como parámetro nuestro Reducer
const store = createStore(contador);

// Obtenemos el elemento con el id `valor`.
const valor = document.getElementById('valor'); 

// Esta función nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  const counter = store.getState().contador;

  //! Establecemos el valor en el elemento con id 'valor':
  // Seteamos el número obtenido como texto dentro del elemento con id 'valor':
    valor.innerHTML = counter;
}

// Ejecutamos la función 'renderContador':
  renderContador();
// Nos subscribimos al store pasándole la misma función. Así cada vez que llegue una acción, ejecutamos la función:

store.subscribe(renderContador);

// Por último, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la acción correspondiente:


buttonMas.addEventListener("click", () => {
  store.dispatch(incremento());
});

buttonMenos.addEventListener("click", () => {
  store.dispatch(decremento());
});

incremetarImpar.addEventListener("click", () => {
  store.getState().contador % 2 !== 0 && store.dispatch(incremento())
})

incremetarAsync.addEventListener("click", setTimeout(() => {
  store.dispatch(incremento())
}, 1000))



