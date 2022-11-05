import { useReducer } from "react";
import { TYPES } from "../actions/ShoppingActions";
import {
  shoppingCartInitial,
  shoppingReducer,
} from "../reducers/shoppingReducer";
import CartItems from "./CartItems";
import ProductItem from "./ProductItem";
import TotalImporte from "./TotalImporte";

export const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingCartInitial);

  //Estos elementos hacen referencia a las variables que estan en shoppingReducers
  const { products, cart, importeTotal } = state;
  const addToCart = (id) => {
    // console.log(id);
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };
  const delFromCart = (id, all = false) => {
    // console.log(id,all)
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };
  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };
  const importeCart = () => {
    dispatch({ type: TYPES.TOTALIMPORTE });
  };

  return (
    <div>
      <h2>Carrito de compras</h2>
      <h3>Productos</h3>
      <article className="grid-responsive">
        {products.map((product) => (
          <ProductItem key={product.id} data={product} addToCart={addToCart} />
        ))}
      </article>
      <h3>Carrito</h3>
      <article className="box">
        <button onClick={clearCart}>Limpiar carrito</button>
      </article>
      {cart.map((item, index) => (
        <CartItems key={index} data={item} delFromCart={delFromCart} />
      ))}
      <h3>
        {state.importeTotal}
      </h3>
    </div>
  );
};

export default ShoppingCart;
