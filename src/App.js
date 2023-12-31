import { useDispatch, useSelector } from 'react-redux';
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
import { IsNotExpiredAccessToken } from './services/auth';
import React from 'react';
import { CreateToast } from './utils/Toast';
import TranslatedText from './utils/Translation';
import ReactDOMServer from 'react-dom/server';
import NotFound from "./pages/Error/notFound"
import { RESET_ALL } from './redux/actions/GlobalActions';
export default function App() {
  const isLoggedState = useSelector((state) => state.isLogged);
  const LightModeState = useSelector((state) => state.lightMode);
  const AccessToken = useSelector((state) => state.userAccessToken);
  const dispatch=useDispatch()
  const root = document.getElementById('root');
  const isLightMode = LightModeState === LightMode().type;

  React.useEffect(() => {
    const rootClasses = root.classList;
    const bgColorClass = isLightMode ? 'bg-whiteTheme_T1' : 'bg-darkTheme_T1';
    const textColorClass = isLightMode ? 'tc-whiteTheme_T1' : 'tc-darkTheme_T1';

    rootClasses.remove('bg-darkTheme_T1', 'bg-whiteTheme_T1', 'tc-darkTheme_T1', 'tc-whiteTheme_T1');
    rootClasses.add(bgColorClass, textColorClass);
  }, [isLightMode]);

  const handleAccessTokenVerifying = async () => {
    try {
      const result = await IsNotExpiredAccessToken(AccessToken);
      //Test if the token expired
      if (result.data.tokenExpired || result.data=="") {
        throw new Error("UNVALID_ACCESS_TOKEN");
          }
    } catch (error) {
              //Access Token expired.
              if(error=="UNVALID_ACCESS_TOKEN")
              {
                CreateToast(
                  null,
                  ReactDOMServer.renderToStaticMarkup(
                    <TranslatedText TranslationPath="UCP.DialogMessages.Session.SessionExpired" />,
                  ),
                  "",
                  "",
                  "",
                      /*Custom request Errors message*/
                      [],
                      /*Custom Request Error codes */
                      [],
                      /*Default Connection Errors */
                      [],
                  'error',
                  LightModeState == LightMode().type,
                );
              }
              if(error.code=="ERR_NETWORK")
              {
                CreateToast(
                  null,
                  ReactDOMServer.renderToStaticMarkup(
                    <TranslatedText TranslationPath="UCP.DialogMessages.Connection.ConnectionLost" />,
                  ),
                  "",
                  "",
                  "",
                      /*Custom request Errors message*/
                      [],
                      /*Custom Request Error codes */
                      [],
                      /*Default Connection Errors */
                      [],
                  'error',
                  LightModeState == LightMode().type,
                );
              }
              dispatch(RESET_ALL())
    }
  };

  React.useEffect(() => {
    const currentLocation = window.location.href;
    const isLoginPage = currentLocation.includes('/Login') || currentLocation.includes('/login') ;
    const isRegisterPage = currentLocation.includes('/Register') || currentLocation.includes('/reegister');
    if(isLoggedState)
    {
      //checking if the access token is valid or not if the page is not login or register
      if (!isLoginPage && !isRegisterPage) {
        handleAccessTokenVerifying();
      }
    }

  },[]);

  // Define your routes in an array
  const routes = [
    { path: '/', element: <Home /> },
    { path: '/Home', element: <Home /> },
    { path: '/Login', element: <Login /> },
    { path: '/Register', element: <Register /> },
    { path: '/Contact', element: <Contact /> },
    { path: '/Products', element: <Products /> },
    { path: '/ProductDetails', element: <ProductDetails /> },
    { path: '/UCP/Profil', element: <UCP_Profile /> },
    { path: '/UCP/Orders', element: <UCP_Orders /> },
    { path: '/UCP/MyOrders', element: <UCP_MyOrders /> },
    { path: '/UCP/Order', element: <UCP_Order /> },
    { path: '/UCP/Product', element: <UCP_EditProduct /> },
    { path: '/UCP/Products', element: <UCP_Products /> },
    { path: '/UCP/AddProduct', element: <UCP_AddProduct /> },
    { path: '/UCP/Accounts', element: <UCP_Accounts /> },
    { path: '/UCP/Inbox', element: <UCP_Inbox /> },
    { path: '/UCP/Invoice', element: <UCP_Invoice /> },
    { path: '/UCP/Home', element: <UCP_Home /> },
    { path: '/Dev', element: <Dev /> },
    { path: '/Loading', element: <Loading /> },
  ];

  return (
    <div className="w-full">
      <ToastContainer closeOnClick rtl={false} pauseOnFocusLoss draggable />
      <Cart />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
          
        ))}
        {/*<Route path='*' key={routes.length+1}  element={<NotFound/>} />*/}
      </Routes>
    </div>
  );
}
