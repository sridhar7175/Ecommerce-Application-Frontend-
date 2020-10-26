<h4>
  <b style={{ fontSize: "14px" }}>
    Subtotal (items):{" "}
    {qty !== ""
      ? qty * props.cartReducer.carts?.product_id?.productPrice
      : props.cartReducer.carts?.product_id?.productPrice}
  </b>
</h4>;
