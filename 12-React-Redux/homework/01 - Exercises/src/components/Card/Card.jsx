import React from 'react';
import { connect } from 'react-redux';
import {deleteProduct} from '../../redux/actions/actions.js'
import './card.css';

export class Card extends React.Component{
   // eslint-disable-next-line no-useless-constructor
   constructor(){
      super()

   }

   handleDelete = () => {
      const { deleteProduct, id } = this.props
      deleteProduct(id);
   }
   
   render(){

      const {name, price} = this.props;
      return (
         <div className='cardBg'>
            <h5>{name}: </h5>
            <h5>${price}</h5>
            <button onClick={this.handleDelete} className='cardBtn'>X</button>
         </div>
      )
   };
};

export function mapDispatchToProps(dispatch) {
   return {
      deleteProduct: (id) => dispatch(deleteProduct(id))
   }
}

export default connect(null, mapDispatchToProps)(Card);
