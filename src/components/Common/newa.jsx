import Axios from "axios";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getCarts } from "../../redux/actions/cartaction";
import { generatePublicUrl } from "../../urlConfig";

const AddToCart = (props) => {
  const [qty, setQty] = useState("");
  // const [carts, setCarts] = useState([]);

  //console.log("cartsItems", props);

  useEffect(() => {
    handleLoginUser();
  }, []);
  async function handleLoginUser() {
    await props.getCarts(props?.postCartReducers?.cartData?._id);
  }

  let imageUrl = "";
  if (props.cartReducer.carts?.product_id?.productPicture[0])
    imageUrl = generatePublicUrl(
      props.cartReducer.carts?.product_id?.productPicture[0].img
    );

  useEffect(() => {
    //deleteAddToCart();
    // getAllAddToCart();
  }, []);

  console.log("cartId", props?.postCartReducers?.cartData?._id);

  // const deleteAddToCart = () => {
  //   Axios.delete(
  //     `http://localhost:5000/api/user/deleteaddtocart/${props?.postCartReducers?.cartData?._id}`
  //   );
  // };

  // const getAllAddToCart = () => {
  //   Axios.get("http://localhost:5000/api/user/getaddtocart/").then((res) => {
  //     console.log("aaaaaaaa", res);
  //   });
  // };

  if (props.cartReducer?.loading) {
    return (
      <div>
        <h4>Carts</h4>
        <p>Loading.. Please wait</p>
      </div>
    );
  }
  console.log("aaaaaaaaaabbb", props?.cartReducer?.carts?.productName);

  return (
    <div className="">
      <div className="container mt-3 ml-5 mb-5">
        <div className="" style={{ display: "flex" }}>
          <h4>
            <b>Shopping Cart</b>
          </h4>
          <p style={{ paddingLeft: "200px" }}>
            <b>Price</b>
          </p>
        </div>

        <div className="row">
          <div className="col-md-8">
            <div className="addtocart1"></div>
            {props?.cartReducer?.carts.map((cart) => {
              return (
                <div key={cart._id} className="mt-3">
                  <div className="" style={{ display: "flex" }}>
                    <img
                      src={generatePublicUrl(
                        cart.product_id.productPicture[0]?.img
                      )}
                      width="250px"
                      height="200px"
                      style={{ borderRadius: "10px" }}
                      alt="img"
                    />

                    <h4 className="mt-3 ml-5">
                      <b>{cart.product_id.productName}</b>
                    </h4>
                    <h4 className="mt-3 ml-3">
                      <b>
                        ₹
                        {qty !== ""
                          ? qty * cart.product_id.productPrice
                          : cart.product_id.productPrice}
                      </b>
                    </h4>
                  </div>
                  <div className="text-center">
                    <select
                      className="ml-5 mb-3"
                      onChange={(e) => setQty(e.target.value)}
                      value={qty}
                    >
                      <option>qty</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                    <button className="ml-3 mb-3">Remove</button>
                  </div>
                  <div className="addtocart1"></div>
                </div>
              );
            })}
          </div>
          <div className="col-md-4">
            <div className="cart9">
              <p className="pl-2">
                Your order is eligible for FREE Delivery. Select this option at
                checkout. Details
              </p>
              <div className="container pb-3 bg-dark text-white">
                <h4>
                  <b>Subtotal (2 items): 92,980.00</b>
                </h4>
                <button className="btn btn-success">Proceed to Buy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

var mapStateToProps = (state) => {
  return {
    cartReducer: state.cartReducer,
    postCartReducers: state.postCartReducers,
    loading: state.loading,
  };
};

var mapDispatchToProps = {
  getCarts,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);
