import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import Cart from './Pages/Cart';
import papercraft_banner from './Components/Assets/banner_papercraft.jpg'
import bamboos_banner from './Components/Assets/banner_bamboos.jpg'
import jute_banner from './Components/Assets/banner_jute.jpg'

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
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;


