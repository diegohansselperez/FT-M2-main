import React from 'react';
import { connect} from 'react-redux';
import Caja from '../../assets/caja.png';
import { addProduct } from '../../redux/actions/actions';
import './form.css';

class Form extends React.Component{
   constructor(props){
      super(props)

      this.state = {
         name: "",
         price: "",
         id: "",
      }
   }



   handleInputChange = (event) => {
      this.setState({ ...this.state, [event.target.name]: event.target.value });
   }


   handleSubmit = (event) => {
      const {addProduct} = this.props;
      event.preventDefault();
      addProduct({
         ...this.state,
         id: Date.now(),
      })
      console.log(Date.now());
   }
   render(){
      return (
         <form onSubmit={this.handleSubmit} className='formBg'>
            <div className='inputBox'>
               <label>Nombre: </label>
               <input
                  name='name'
                  onChange={this.handleInputChange}
                  value={this.state.name}
               />
            </div>
            <div className='inputBox'>
               <label>Precio:</label>
               <input
                  type='number'
                  name='price'
                  onChange={this.handleInputChange}
                  value={this.state.price}
               />
            </div>
            <button type='submit' className='formBtn'>¡ADD!</button>
            <img src={Caja} alt='' className='logo' />
         </form>
      )
   }
}

function mapDispatchToProps(dispatch) {
   return {
      addProduct: (product) => dispatch(addProduct(product))
   }
}

export default connect(null, mapDispatchToProps)(Form);
