const botonAmigos = document.getElementById("boton");

const inputBuscar = document.getElementById("input");
const botonBuscar = document.getElementById("search");
const spanAmigo = document.getElementById("amigo");

const inputEliminar = document.getElementById("inputDelete");
const botonEliminar = document.getElementById("delete");
const spanSuccess = document.getElementById("success");

const listaOrdena = document.getElementById("lista");

const URL_db = "http://localhost:5000";

//Mostrar un amigo ********************************************
const amigosJson = (amigos) => {
  lista.innerHTML = "";
  amigos.forEach(({id, name}) => {
  const li = document.createElement("li");
  li.innerHTML =`${id} - ${name}`;
  listaOrdena.appendChild(li);
  })
};

const friends = () => {
$.get(`${URL_db}/amigos`, amigosJson);
}

botonAmigos.addEventListener("click", friends)

//Buscar un amigo************************************************
const nombreAmigo = (friend) => {
    spanAmigo.innerHTML = friend.name;
}

const buscarAmigo = () => {
    const id = input.value
    $.get(`${BASE_URL}/amigos/${id}`, nombreAmigo)
}

botonBuscar.addEventListener("click",buscarAmigo)


//Eliminar un amigo********************************************************
const eliminarAmigo = () => {
    const id = inputEliminar.value
    $.ajax({
      url:`${BASE_URL}/amigos/${id}`,
      type: "DELETE",
      success: () => {
        alert("Eliminamos un amigo")
        spanSuccess.innerText= "Amigo eliminado exitosamente";
        friends();
       }
  })
};

botonEliminar.addEventListener("click", eliminarAmigo)
