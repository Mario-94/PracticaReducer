const TotalImporte = ({ data }) => {
  let variable = data.map((item) => item.price * item.quantity);
  let total = variable.reduce((a, b) => a + b, 0);

  return (
    <div>
      <div style={{ borderBottom: "thin solid gray" }}>
        <h5>Total importe: ${total}.00</h5>
      </div>
    </div>
  );
};

export default TotalImporte;
