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
import Userorderpage from "./containers/userdashboardpages/Userorderpage";
import Userdownlaodspage from "./containers/userdashboardpages/Userdownlaodspage";
import Useraddresspage from "./containers/userdashboardpages/Useraddresspage";
import Userdetailspage from "./containers/userdashboardpages/Userdetailspage";

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
          <Route path="/user/dashboard" component={UserDashboardpage} />
          <Route path="/user/order" component={Userorderpage} />
          <Route path="/user/downloads" component={Userdownlaodspage} />
          <Route path="/user/edit-address/:Id" component={Useraddresspage} />
          <Route path="/user/edit-user/" component={Userdetailspage} />
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
