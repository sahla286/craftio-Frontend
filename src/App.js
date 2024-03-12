import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import Cart from './Pages/Cart';
import papercraft_banner from './Components/Assets/banner_papercraft.jpg'
import bamboos_banner from './Components/Assets/banner_bamboos.jpg'
import jute_banner from './Components/Assets/banner_jute.jpg'
// import SellerRegistration from './Pages/SellerRegistration';
// import AddProductPageSeller from './Components/AddProductPage/AddProductPageSeller';
// import Seller from './Pages/Seller';
// import ListProductPage from "./Components/ListProductPage/ListProductPage";
import Payment from './Pages/Payment';
import PaymentSuccessPage from './Pages/PaymentSuccessPage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/papercraft' element={<ShopCategory banner={papercraft_banner} category="papercraft"/>}/>
        <Route path='/wooden' element={<ShopCategory banner={bamboos_banner} category="wooden"/>}/>
        <Route path='/jute' element={<ShopCategory banner={jute_banner} category="jute"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/paymentsuccess' element={<PaymentSuccessPage/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        {/* <Route path='/registr' element={<SellerRegistration/>}/> */}
        {/* <Route path='/seller' element={<Seller />} />

        <Route path='/addproductseller' element={<AddProductPageSeller/>}/>
        <Route path="/listproductseller" element={<ListProductPage />} /> */}
        
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;


