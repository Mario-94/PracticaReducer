import { useReducer } from "react"; 
//importamos las types que son las acciones que realizara el componente.
import { TYPES } from "../actions/contadorActions";
//importamos los reducers o logica que se realizara dependiendo de la accion que realicen nuestros botones
import { contadorReducer,contadorInitialState,contadorInit } from "../reducers/contadorReducer";


const ContadorMejorado = () => {
  //   const [contador, SetContador] = useState(0);
  //sin useReducer
  //   const sumar = () => SetContador(contador + 1);
  //   const restar = () => SetContador(contador - 1);

  //con useReducer 
  const [state, dispatch] = useReducer(contadorReducer, contadorInitialState,contadorInit);

  const sumar = () => dispatch({ type: TYPES.INCREMENT });
  const sumar5 = () => dispatch({ type: TYPES.INCREMENT_5, playload: 5 });
  const restar = () => dispatch({ type: TYPES.DECREMENT });
  const restar5 = () => dispatch({ type: TYPES.DECREMENT_5, playload: 5 });
  const reset = () => dispatch({ type: TYPES.RESET });
  return (
    //sin useReducer
    // <div style={{ textAlign: "center" }}>
    //   <h2>contador</h2>
    //   <nav>
    //     <button onClick={sumar}>+</button>
    //     <button onClick={restar}>-</button>
    //   </nav>
    //   <h3>{contador}</h3>
    // </div>

    //con useReducer
    <div style={{ textAlign: "center" }}>
      <h2>contador Mejorado Reducers</h2>
      <nav>
        <button onClick={sumar5}>+5</button>
        <button onClick={sumar}>+</button>
        <button onClick={reset}>0</button>
        <button onClick={restar}>-</button>
        <button onClick={restar5}>-5</button>
      </nav>
      {/* Recordemos que siempre debemos poner el valor del initialState, de lo contrario con el puro state, no se puede realizar ninguna accion */}
      <h3>{state.contador}</h3>
    </div>
  );
};

export default ContadorMejorado;
