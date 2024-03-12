import React,{useContext, useRef, useState} from 'react'
import './Navbar.css'
import logo from '../Assets/handicraft.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [menu,setMenu] = useState('shop');
  const [searchQuery, setSearchQuery] = useState('');
  const {getTotalCartItems,searchProducts}=useContext(ShopContext);
  const menuRef = useRef();
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
}
const handleSearchSubmit = (e) => {
    e.preventDefault();
    searchProducts(searchQuery);
}
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt=''/>
            <h1>CRAFT.IO</h1>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt=''/>
        <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{ textDecoration: 'none' }}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("papercraft")}}><Link to='/papercraft' style={{ textDecoration: 'none' }}>Papercraft</Link>{menu==="papercraft"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("wooden")}}><Link to='/wooden' style={{ textDecoration: 'none' }}>Wooden</Link>{menu==="wooden"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("jute")}}><Link to='/jute' style={{ textDecoration: 'none' }}>Jute</Link>{menu==="jute"?<hr/>:<></>}</li>
      </ul> <br></br>  
      <form className='nav-search' onSubmit={handleSearchSubmit}>
        <input type="text" placeholder="Search" value={searchQuery} onChange={handleSearchInputChange}/>
        <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
      </form>
        <div className='nav-login-cart'>
          {localStorage.getItem('auth-token')
          ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
        :<Link to='/login'> <button>Login</button></Link>}
         {/* <Link to="/registr"><button>Become a Seller</button></Link> */}
           <Link to='/cart'><img src={cart_icon} alt=''/></Link> 
            <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar;