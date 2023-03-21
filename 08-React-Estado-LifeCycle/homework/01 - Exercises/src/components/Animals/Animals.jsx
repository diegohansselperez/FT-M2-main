import React from "react";
import './Animals.module.css'

export default class Animals extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        {this.props.animals.map((animal, index) => (
            <div key={index} className="containerAnimals">
              <h5>{animal.name}</h5>
              <img src={animal.image} alt={animal.name} width="300px" />
              <span>{animal.specie}</span>
            </div>
          )
        )}
      </div>
    );
  }
}
