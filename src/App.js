import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./containers/Homepage";
import Registerpage from "./containers/Registerpage";
import Loginpage from "./containers/Loginpage";
import Cartpage from "./containers/Cartpage";
import UserDashboardpage from "./containers/userdashboardpages/UserDashboardpage";
import AdminDspage from "./containers/adminpages/AdminDspage";
import Addproductpage from "./containers/adminpages/Addproductpage";
import Buypage from "./containers/buypages/Buypage";
import Manageproductspage from "./containers/adminpages/Manageproductspage";
import Updateproductpage from "./containers/adminpages/Updateproductpage";
import aboutpage from "./containers/commonpages/aboutpage";
import Shoppage from "./containers/commonpages/Shoppage";
import Productdetailspage from "./containers/adminpages/Productdetailspage";
import AccountInfopage from "./containers/accountpages.js/AccountInfopage";
import ShippingDetailspage from "./containers/accountpages.js/ShippingDetailspage";
import Wishlistpage from "./containers/accountpages.js/Wishlistpage";
import Orderspage from "./containers/accountpages.js/Orderspage";

function App() {
  return (
    <div className="">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shoppage} />
          <Route path="/signup" component={Registerpage} />
          <Route path="/signin" component={Loginpage} />
          <Route path="/cart" component={Cartpage} />
          <Route path="/accountinfo" component={AccountInfopage}/>
          <Route path="/shippingDetails" component={ShippingDetailspage}/>
          <Route path="/wishlist" component={Wishlistpage}/>
          <Route path="/myorder" component={Orderspage}/>
          <Route path="/admin/dashboard" component={AdminDspage} />
          <Route path="/admin/create/product" component={Addproductpage} />
          <Route path="/admin/mangeproduct" component={Manageproductspage} />
          <Route
            path="/admin/product/update/:Id"
            component={Updateproductpage}
          />
          <Route path="/buy" component={Buypage} />
          <Route path='/productdetails' component={Productdetailspage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
