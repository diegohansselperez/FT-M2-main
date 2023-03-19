export default function SearchBar(props) {
   return (
      <div>
         <input type='search' placeholder="Agregar un personaje" />
         <button onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
