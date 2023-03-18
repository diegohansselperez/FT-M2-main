import React from 'react'

export const Botones = ({m1, m2}) => {

    //const {m1, m2} = props.alerts;
  return (
    <div>
        <button onClick={() => alert(`${m1}`)}>Modulo 1</button>
        <button onClick={() => alert(`${m2}`)}>Modulo 2</button>
    </div>
  )
}
