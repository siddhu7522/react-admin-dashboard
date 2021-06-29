import react from "react"
import './App.css';
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Userlist from "./pages/userlist/Userlist"
import User from "./pages/user/User"
import NewUser from "./pages/newUser/NewUser"
import ProductList from "./pages/productlist/ProductList";
import NewProduct from "./pages/newProduct/NewProduct";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/home/Home"
import Product from "./pages/product/Product";
function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Switch>
          <Route path="/"exact>
          <Home/>
            </Route>  
            <Route path="/users">
              <Userlist/>
              </Route> 
              <Route path="/user/:userId">
              <User/>
              </Route>  
              <Route path="/newUser">
              <NewUser/>
              </Route> 

                <Route path="/products">
              <ProductList/>
              </Route> 

                <Route path="/product/:productId">
              <Product/>
              </Route>  
              <Route path="/newProduct">
             <NewProduct/>
              </Route>      
        </Switch>
      </div>

    </Router>
    
     
    
    

       
    
     
    
  );
}

export default App;
