const ProductItem = ({ data, addToCart,importeCart }) => {
  let { id, name, price } = data;
  function agregar() {
    addToCart(id);
    calcularTotal()
  }
  function calcularTotal() {
    importeCart(id)
  }


  return (
    <div style={{ border: "thin solid gray", padding: "1rem" }}>
      <h4>{name}</h4>
      <h5>${price}.00</h5>
      <button onClick={agregar}>Agregar</button>
    </div>
  );
};

export default ProductItem;
