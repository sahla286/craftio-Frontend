import React,{useContext, useRef, useState} from 'react'
import './Navbar.css'
import logo from '../Assets/handicraft.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown.png'

const Navbar = () => {
    const [menu,setMenu] = useState('shop');
    const {getTotalCartItems}=useContext(ShopContext);
    const menuRef = useRef();
    const dropdown_toggle = (e) => {
      menuRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open');
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
        <li onClick={()=>{setMenu("papercraft")}}><Link to='/papercraft' style={{ textDecoration: 'none' }}>Paper craft</Link>{menu==="papercraft"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("wooden")}}><Link to='/wooden' style={{ textDecoration: 'none' }}>Wooden</Link>{menu==="wooden"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("jute")}}><Link to='/jute' style={{ textDecoration: 'none' }}>Jute</Link>{menu==="jute"?<hr/>:<></>}</li>
      </ul>

        <div className='nav-login-cart'>
          {localStorage.getItem('auth-token')
          ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
        :<Link to='/login'> <button>Login</button></Link>}
           <Link to='/cart'><img src={cart_icon} alt=''/></Link> 
            <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar