import React from "react";

const mapa =
   'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.44367080684!2d-58.50333841259388!3d-34.61566245778971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1665159144041!5m2!1ses-419!2sar';

const CopyData = () => {
   const [number, setNumber] = React.useState("123-456-7891")
   const numberRef = React.useRef()

   const handleCopy =() => {
      let copyText = numberRef.current.lastChild.data;
      const textArea = document.createElement("textarea");
      textArea.textContent = copyText;
      document.body.append(textArea);
      textArea.select();
      document.execCommand("copy");
      textArea.remove();
      setNumber(copyText)
   } 

   return (
      <div className='copyBg'>
         <div ref={numberRef}>Teléfono:{number}</div>
         <iframe src={mapa} className='mapa' title="mapa" />
         <button onClick={handleCopy}>Copy</button>
      </div>
   );
};

export default CopyData;

// En este ejercicio crearás una funcionalidad de _**Copiado al Portapapeles**_ del número telefónico de la empresa.

// ### **USE REF**

// 🔹 Dirígete al archivo **components/CopyData/CopyData.jsx**.

// 🔹 Lo que hay que hacer:

// 1.  Usa los hooks `useState` y `useRef`.

// 2.  Crea un estado local llamado "**number**", donde su estado inicial sea un string con números a tu elección, siguiendo la siguiente estructura:

//     XXX-XXX-XXXX

// 3.  Crea una constante llamada "**numberRef**" que será igual a la ejecución del hook `useRef()`.

// 4.  El componente funcional CopyData debe renderizar:

//     - Una etiqueta `button` con el texto "**_Copy_**"
//     - Una etiqueta `div`. A esta etiqueta debes agregar el atributo **ref** donde su valor sea la constante **numberRef**. Además, dentro de esta etiqueta debes escribir:

//       ```jsx
//       Teléfono: {number}
//       ```

//     > **NOTA:** es muy importante que el texto que escribas dentro de la etiqueta "div" sea literalmente el anterior, debido a que se tomará como referencia, el valor de tu estado local.

// 5.  Crea una función llamada **handleCopy**. En el cuerpo de la función tienes que copiar y pegar el siguiente código:

// ```javascript
// let copyText = numberRef.current.lastChild.data;
// const textArea = document.createElement("textarea");
// textArea.textContent = copyText;
// document.body.append(textArea);
// textArea.select();
// document.execCommand("copy");
// textArea.remove();
// ```

// > **NOTA:** este código sirve para que el número de télefono se copie en el portapapeles del usuario. No es importante que entiendas qué está sucediendo en ese código, pero te invitamos a que lo analices.

// 6. Pásale la función **handleCopy** a la etiqueta `button` que creaste anteriormente, mediante un evento **onClick**.

// > Para esta instancia deben pasar todos los tests. ✅ 🏆
