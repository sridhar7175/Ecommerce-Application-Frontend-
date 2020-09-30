import React from "react";
import { Link } from "react-router-dom";

const ProductDetails = (props) => {
  return (
    <div>
      <div className="container mt-3 pd1 mb-5">
        <h5>Product Details</h5>
        <p className="mt-2">
          Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen
          Intel Core i7) - Space Grey
        </p>
        <div className="row">
          <div className="col-sm-6 pd2 mt-2">
            <img
              src="images/macbook.jpg"
              alt="pad"
              width="350px"
              height="300px"
            />
          </div>
          <div className="col-sm-6 pd3 mt-3">
            <h4>
              NAME :<b>Laptop</b>
            </h4>
            <h4>
              Brand :<b>Apple MacBook Pro</b>
            </h4>
            <h4>
              Price : <b>₹1250.00</b>
            </h4>
            <select>
              <option>Select Qty</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <br />
            <Link to="/cart">
              <button
                className="btn btn-info btn-sm mt-2"
                style={{ marginRight: "10px" }}
              >
                Add To Cart
              </button>
            </Link>
            <div className="pd4 mt-4">
              <h5>About Item</h5>
              <ul>
                <li>Ninth-generation 6-core Intel Core i7 processor</li>
                <li>
                  Stunning 16-inch Retina display with True Tone technology
                </li>
                <li>Touch Bar and Touch ID</li>
                <li>AMD Radeon Pro 5300M graphics with GDDR6 memory</li>
                <li>Ultrafast SSD</li>
                <li>Intel UHD Graphics 630</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
