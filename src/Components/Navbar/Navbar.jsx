import React,{useState} from 'react'
import './Navbar.css'
import logo from '../Assets/handicraft.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu,setMenu] = useState('shop');
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt=''/>
            <p>CRAFT.IO</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("paper craft")}}><Link to='/paper craft'>Paper craft</Link>{menu==="paper craft"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("bamboo")}}><Link to='/bamboo'>Bamboo</Link>{menu==="bamboo"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("jewellary")}}><Link to='/jewellary'>Jewellary</Link>{menu==="jewellary"?<hr/>:<></>}</li>

        </ul>
        <div className='nav-login-cart'>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt=''/></Link>
            <div className='nav-cart-count'>0</div>
        </div>
      
    </div>
  )
}

export default Navbar
