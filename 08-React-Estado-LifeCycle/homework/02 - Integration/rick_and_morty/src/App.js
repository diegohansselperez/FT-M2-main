import { useState } from "react";
import "./App.css";
//import Card from './components/Card.jsx';
import Cards from "./components/Cards.jsx";
import { Nav } from "./components/Nav";
//import { characters } from './data.js';

function App() {
  const [characters, setCharacters] = useState([]);
  
  const onSearch = (id) => {
   fetch(`https://rickandmortyapi.com/api/character/${id}`)
     .then(res => res.json())
     .then(data => {
        if(data.name && !characters.find(person => person.id === data.id)){
         //oldCharts es igual a characters, solo le cambiamos el nombre.
           setCharacters((oldCharts) => [...oldCharts, data])
        } else {
            if(characters.find(person => person.id === data.id)){
               return window.alert("un elemento ya esta añadido")
            } else {
               window.alert("No se encontro el ID")
            }
           
        }
     })
 };

 const onClose = (id) => {
      setCharacters(characters.filter(pers => pers.id !== id))
 }

  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <Cards
        characters={characters}
        onClose={onClose}
      />
    </div>
  );
}

export default App;

// En esta sintaxis, myState es la variable de estado y setMyState es una función que se utiliza para actualizar el valor de myState. initialState es el valor inicial de myState.
// Cuando se llama a setMyState, React re-renderiza el componente y actualiza el valor de myState con el nuevo valor proporcionado como argumento.
// Es importante tener en cuenta que cada llamada a useState es independiente, por lo que puedes utilizar useState varias veces en un solo componente para agregar múltiples variables de estado.
