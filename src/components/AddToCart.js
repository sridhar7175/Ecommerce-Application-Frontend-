import React from "react";

const AddToCart = () => {
  // const [carts,setCarts]=useState([])

  return (
    <div>
      <div className="container-fluid mt-3 cart1 mb-5">
        <div className="row">
          <div className="col-sm-8 mt-3">
            <div className="cart2">
              <h4 className=" mb-2 pb-2">Shopping Cart</h4>
              <h4 className="cart3">price</h4>
            </div>
            <div className="mt-3" style={{ display: "flex" }}>
              <img src="images/vivo.jpg" alt="img1" />
              <p>
                Vivo V17 (Midnight Ocean, 8GB RAM, 128GB Storage) with No Cost
                EMI/Additional Exchange Offers
              </p>
              <p className="cart6">19,000</p>
            </div>
            <div className="cart4">
              <select>
                <option>qty</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <button className="ml-3">Delete</button>
            </div>
            <div className="cart5 pb-5"></div>
            <div className="mt-3" style={{ display: "flex" }}>
              <img src="images/applemobile.jpg" alt="img1" />
              <p>Apple iPhone 11 (128GB) - White</p>
              <p className="cart6">70,000</p>
            </div>
            <div className="cart4">
              <select>
                <option>qty</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <button className="ml-3">Delete</button>
            </div>
            <div className="cart7 pb-5"></div>
            <div>
              <p className="cart8 mt-2">Subtotal (2 items): 92,980.00</p>
            </div>
          </div>
          <div className="col-sm-4 mt-5 pl-5 pt-3 ">
          <div className="cart9">
          <p>Your order is eligible for FREE Delivery. Select this option at checkout. Details</p>
          <div className="container pb-3 bg-dark text-white">
            <h4><b>Subtotal (2 items): 92,980.00</b></h4> 
            <button className="btn btn-success">Proceed to Buy</button> 
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
