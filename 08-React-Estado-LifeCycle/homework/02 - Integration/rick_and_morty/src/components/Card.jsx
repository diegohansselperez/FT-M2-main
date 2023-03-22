import style from "../styles/Cards.module.css"

export default function Card(props) {
  return (
    <div className={style.card} key={props.id}>
      <button onClick={() => props.onClose(props.id)}>X</button>
      <img src={props.image} alt={props.name} />
      <h2>{props.name}</h2>
      <p>{props.status}</p>
      <p>{props.species}</p>
      <p>{props.gender}</p>
      <p>{props.origin.name}</p>
    </div>
  );
}
