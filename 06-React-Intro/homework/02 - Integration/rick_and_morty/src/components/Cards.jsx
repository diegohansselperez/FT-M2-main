export default function Cards(props) {
  const persRick = props.characters.map((personaje) => {
   console.log(personaje.image);
    return (
      <div key={personaje.id}>
        <button onClick={props.onClose}>X</button>
        <h2>{personaje.name}</h2>
        <p>{personaje.status}</p>
        <p>{personaje.species}</p>
        <p>{personaje.gender}</p>
        <p>{personaje.origin.name}</p>
        <img src={personaje.image} alt={personaje.name} />
      </div>
    );
  });

  return <div>{persRick}</div>;
}
