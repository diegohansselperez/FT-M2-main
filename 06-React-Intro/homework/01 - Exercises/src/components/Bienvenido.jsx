import React from "react";
import {Botones} from "./Botones";

const studentName = "Diego Hanssel Perez";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };
const devTec = techSkills.map((elemento) => {
  return <li>{elemento}</li>;
});

export default function Bienvenido(props) {
  // el código de tu componente acá
 const {alerts} = props;
  return (
    <>
      <div>
        <h1>soy un titulo cualquiera</h1>
        <h3>{studentName}</h3>
        <ul>{devTec}</ul>
        <Botones alerts={alerts}/>
      </div>
    </>
  );
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
