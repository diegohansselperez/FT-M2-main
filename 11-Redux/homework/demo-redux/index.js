const { createStore } = require("redux");

const initialState = {
    count: 0,
    instructor:"",
    students:[],
    courses:[],
}




//creamos un funcion llamada reducer(tambien puede ser root) que es la encargada de hacer los cambion en la store.
//le pasamos 2 parametros al reducer que son el state que es el estado inicial y el action que es el encargado de ejecutar un cambio en el estado global(store).

//Action se encarga de traer el type del objeto que le asignamos y nos da el valor que queremos comparar en la codicional if.
const reducer = (state = initialState,action) => {
    //action => {type: "AUMENTAR_COUNTER"}
    if(action.type === "AUMENTAR_COUNTER") {
        return {
          ...state,
            count: state.count + 1
        }
    }
    //action => {type: "CAMBIAR_INSTRUCTOR", pylote: "Diego"}
    if(action.type === "CAMBIAR_INSTRUCTOR"){
        return {
          ...state,
            instructor: action.pylote
        }
    }
    //action => {type: "AGREGAR_ALUMNOS", newArray: ["jorge", "antonella", "fernando"]}
    if(action.type === "AGREGAR_ALUMNOS"){
        return{
            ...state,
            students: [...state.students, action.newArray]
        }
    }
};

//createStore sirve para guardar el reducer y hacer cambios en la store global.
//createStore es una función proporcionada por la biblioteca Redux que se utiliza para crear un almacén (store) de datos en una aplicación de React. El almacén es un objeto que contiene el estado de la aplicación y proporciona una forma de actualizar y acceder a ese estado.

// Para crear un almacén con createStore, es necesario pasar una función reductora (reducer) como argumento. El reductor es una función que toma el estado actual y una acción, y devuelve un nuevo estado actualizado. El almacén también puede aceptar opcionalmente un estado inicial, un middleware y un enhancer.
const store = createStore(reducer);
/*! El almacén devuelto por createStore tiene tres métodos principales: dispatch, getState y subscribe.
 
    dispatch: se utiliza para enviar una acción al reductor y actualizar el estado del almacén.
    getState: devuelve el estado actual del almacén.
    subscribe: se utiliza para agregar una función de devolución de llamada que se ejecutará cada vez que el estado del almacén cambie.*/

store.dispatch({type:"AUMENTAR_COUNTER"})
store.dispatch({type:"CAMBIAR_INSTRUCTOR", pylote:"Diego"})
store.dispatch({type: "AGREGAR_ALUMNOS", newArray: ["jorge", "antonella", "fernando"]})

console.log(store.getState());