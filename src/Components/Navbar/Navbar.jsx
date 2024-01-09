import React,{useState} from 'react'
import './Navbar.css'
import logo from '../Assets/handicraft.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {
    const [menu,setMenu] = useState('shop');
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt=''/>
            <p>CRAFT.IO</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("paper craft")}}>Paper craft{menu==="paper craft"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("bamboo")}}>Bamboo{menu==="bamboo"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("jewellary")}}>Jewellary{menu==="jewellary"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <button>Login</button>
            <img src={cart_icon} alt=''/>
            <div className='nav-cart-count'>0</div>
        </div>
      
    </div>
  )
}

export default Navbar
