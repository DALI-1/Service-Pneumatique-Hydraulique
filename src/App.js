import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login';
import Contact from './pages/contact';
import Products from './pages/products';
import ProductDetails from './pages/products/Preview';
import { LightMode } from './redux/actions/LightActions';
import Dev from './pages/test';
import Cart from './components/Cart';
import Loading from './pages/loading';
import UCP_Profile from './pages/UCP/Profile';
import UCP_Orders from './pages/UCP/Orders';
import UCP_Order from './pages/UCP/Order';
import UCP_EditProduct from './pages/UCP/EditProduct';
import UCP_Products from './pages/UCP/Products';
import UCP_AddProduct from './pages/UCP/AddProduct';
import UCP_MyOrders from './pages/UCP/MyOrders';
import UCP_Accounts from './pages/UCP/Accounts';
import UCP_Inbox from './pages/UCP/Inbox';
import UCP_Invoice from './pages/UCP/Invoice';
import UCP_Home from './pages/UCP/Home';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
export default function App() {
  const LightModeState = useSelector((state) => state.lightMode);
  const root = document.getElementById('root');
  if (LightModeState == LightMode().type) {
    root.classList.remove('bg-darkTheme_T1');
    root.classList.add('bg-whiteTheme_T1');

    root.classList.remove('tc-darkTheme_T1');
    root.classList.add('tc-whiteTheme_T1');
  } else {
    root.classList.remove('bg-whiteTheme_T1');
    root.classList.add('bg-darkTheme_T1');

    root.classList.remove('tc-whiteTheme_T1');
    root.classList.add('tc-darkTheme_T1');
  }

  return (

    <div className="animate-fade w-full">
      <ToastContainer closeOnClick rtl={false} pauseOnFocusLoss draggable />
      <Cart />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
        <Route path="/UCP/Profil" element={<UCP_Profile />} />
        <Route path="/UCP/Orders" element={<UCP_Orders />} />
        <Route path="/UCP/MyOrders" element={<UCP_MyOrders />} />
        <Route path="/UCP/Order" element={<UCP_Order />} />
        <Route path="/UCP/Product" element={<UCP_EditProduct />} />
        <Route path="/UCP/Products" element={<UCP_Products />} />
        <Route path="/UCP/AddProduct" element={<UCP_AddProduct />} />
        <Route path="/UCP/Accounts" element={<UCP_Accounts />} />
        <Route path="/UCP/Inbox" element={<UCP_Inbox />} />
        <Route path="/UCP/Invoice" element={<UCP_Invoice />} />
        <Route path="/UCP/Home" element={<UCP_Home />} />

        <Route path="/Dev" element={<Dev />} />
        <Route path="/Loading" element={<Loading />} />
      </Routes>
    </div>

  );
}
