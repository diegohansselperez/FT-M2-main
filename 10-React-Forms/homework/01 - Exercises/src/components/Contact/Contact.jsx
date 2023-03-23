import React from "react";
import "./Contact.modules.css";
import { useState } from "react";

// eslint-disable-next-line

export function validate (inputs) {
  
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const errors = {};
  if (!inputs.name) {
    errors.name = "Se requiere un nombre";
  }
  if (!regexEmail.test(inputs.email)) {
    errors.email = "Debe ser un correo electrónico";
  }
  if (!inputs.message) {
    errors.message = "Se requiere un mensaje";
  }
  return errors;
};

export default function Contact() {


  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    // const property = event.target.name;
    // const value = event.target.value;
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validate({
        ...inputs,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.values(errors).length === 0) {
      alert("Datos completos");
      setInputs({
        name: "",
        email: "",
        message: "",
      });
      setErrors(validate({
        name: "",
        email: "",
        message: "",
      }));
    } else {
      alert("Debe llenar todos los campos")
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            className={errors.name && "warning"}
            type="text"
            placeholder="Escribe tu nombre..."
            name="name"
            value={inputs.name}
            onChange={handleChange}
          />
          <p className="danger">{errors.name}</p>
        </div>
        <div>
          <label>Correo Electrónico:</label>
          <input
            className={errors.email && "warning"}
            type="text"
            placeholder="Escribe tu email..."
            name="email"
            value={inputs.email}
            onChange={handleChange}
          />
          <p className="danger">{errors.email}</p>
        </div>
        <div>
          <label >Mensaje:</label>
          <textarea
            className={errors.message && "warning"}
            type="text"
            placeholder="Escribe tu mensaje..."
            name="message"
            value={inputs.message}
            onChange={handleChange}
          />
          <p className="danger">{errors.message}</p>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
