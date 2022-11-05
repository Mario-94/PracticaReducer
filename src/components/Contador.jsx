import React from "react";
import { useState, useReducer } from "react";

const initialState = { contador: 0 };
const TYPES = {
  INCREMENT: "INCREMENT",
  INCREMENT_5: "INCREMENT_5",
  DECREMENT: "DECREMENT",
  DECREMENT_5: "DECREMENT_5",
  RESET: "RESET",
};
function reducer(state, action) {
  switch (action.type) {
    case TYPES.INCREMENT:
      return { contador: state.contador + 1 };

    case TYPES.INCREMENT_5:
      return { contador: state.contador + action.playload };
    case TYPES.DECREMENT:
      return { contador: state.contador - 1 };

    case TYPES.DECREMENT_5:
      return { contador: state.contador - action.playload };

    case TYPES.RESET:
      return initialState;

    default:
      return state;
  }
}

const Contador = () => {
  //   const [contador, SetContador] = useState(0);
  //sin useReducer
  //   const sumar = () => SetContador(contador + 1);
  //   const restar = () => SetContador(contador - 1);

  //con useReducer
  const [state, dispatch] = useReducer(reducer, initialState);
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
      <h2>contador</h2>
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

export default Contador;
