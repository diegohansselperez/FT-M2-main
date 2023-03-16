const botonAmigos = document.getElementById("boton");

const inputBuscar = document.getElementById("input");
const botonBuscar = document.getElementById("search");
const spanAmigo = document.getElementById("amigo");

const inputEliminar = document.getElementById("inputDelete");
const botonEliminar = document.getElementById("delete");
const spanSuccess = document.getElementById("success");

const listaOrdena = document.getElementById("lista");

const URL_db = "http://localhost:5000";


const amigosJson = (amigos) => {
  amigos.forEach((amigo) => {
  const li = document.createElement("li");
  li.innerHTML =`${amigo.id}-${amigo.name}`;
  listaOrdena.appendChild(li);
  })};

const friends = () => {
$.get(`${URL_db}/amigos`, amigosJson);
}
botonAmigos.addEventListener("click", friends)

//
const nombre = (friend) => {
    spanAmigo.innerHTML = friend.name;
}

const amigo = () => {
    const id = input.value
    $.get(`http://localhost:5000/amigos/${id}`, nombre)
}

botonBuscar.addEventListener("click",amigo)


//delete

const eliminarAmigo = () => {
    const id = inputEliminar.val();
    $.ajax({
      url: `${BASE_URL}/amigos/${id}`,
      type: "DELETE",
    })
      .done(() => {
        spanSuccess.text("Amigo eliminado exitosamente");
        friends();
      })
      .fail((error) => console.error(error));
  };

botonEliminar.addEventListener("click", eliminarAmigo)
