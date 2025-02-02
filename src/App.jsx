// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import CartPage from "./pages/CartPage";
// import ProductList from "./pages/ProductList"; // Example page
// import CheckoutPage from "./pages/Checkout";
// import AdminDashboard from "./components/Admin/AdminDashboard";
// import ManageProducts from "./components/Admin/ManageProducts";
// import ManageOrders from "./components/Admin/ManageOrders";

// import LoginPage from './pages/LoginPage';
// import Register from './pages/Register';



// const App = () => {
//     return (
//         <Router>
//             <div className="flex flex-col min-h-screen">
//                 <Header />
//                 <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/products" element={<ProductList />} />
//                     <Route path="/cart" element={<CartPage />} />
//                     <Route path="/checkout" element={<CheckoutPage />} />
//                     <Route path="/login" element={<LoginPage />} />
//                     <Route path="/register" element={<Register />} />

//                     {/* Admin Panel Routes */}
//                     <Route path="/admin" element={<AdminDashboard />} />
//                     <Route path="/admin/products" element={<ManageProducts />} />
//                     <Route path="/admin/orders" element={<ManageOrders />} />
//                     {/* Add more routes as needed */}
//                 </Routes>
//                 <Footer />
//             </div>
//         </Router>
//     );
// };

// export default App;





import React, { useContext } from "react";
import AppContext from "./context/AppContext";
import ShowProduct from "./components/product/ShowProduct";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/product/ProductDetail";
import Navbar from "./components/Navbar";
import SearchProduct from "./components/product/SearchProduct";
import Register from "./components/user/Register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/user/Login";
import Profile from "./components/user/Profile";
import Cart from './components/Cart'
import Address from './components/Address'
import Checkout from './components/Checkout'
import OrderConfirmation from './components/OrderConfirmation'
//admin side
// import GetAllUser from "./components/user/GetAllUser";
// import AddProduct from "./components/product/AddProduct";
// import EditProduct from "./components/product/EditProduct";
// import ShowProductAdmin from "./components/product/ShowProductAdmin";
// import AllOrder from "./components/AllOrder";


const App = () => {
  // const {} = useContext(AppContext)
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<ShowProduct />} />
        <Route path="/product/search/:term" element={<SearchProduct />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Address />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/oderconfirmation" element={<OrderConfirmation />} />
        {/* Admin side */}
        {/* <Route path="/admin/users" element={<GetAllUser />} />
        <Route path="/admin/addproduct" element={<AddProduct />} />
        <Route path="/admin/editproduct/:id" element={<EditProduct />} />
        <Route path="/admin/products" element={<ShowProductAdmin />} />
        <Route path="/admin/orders" element={<AllOrder />} /> */}
      </Routes>
    </Router>
  );
};

export default App;