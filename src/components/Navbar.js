import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EmailIcon from '@mui/icons-material/Email';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './navbar.css'
function Navbar() {
  const [categories, setCategories] = useState([])
  const [showMenu, setShowMenu] = useState(false)

  const navigate = useNavigate()

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/categories')
        .then(resp =>resp.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div className='navbar'>
            <div className="navbar_top">
          <div className="navbar_logo">
              <h1>VENRY'S</h1>
              </div> 
              <div className="navbar_links">
                  <Link to={'/'}><HomeIcon style={{marginRight:'5px', fontSize:'2.2rem'}}/>Home</Link> 
                  <Link to={'/cart'}> <ShoppingCartIcon style={{marginRight:'5px', fontSize:'2.2rem'}}/>Cart</Link>
                  <Link to={'#'}> <EmailIcon style={{marginRight:'5px', fontSize:'2.2rem'}}/>Contact</Link>
              </div>
             <div className="navbar_menu">
                <MenuIcon onClick={()=>setShowMenu(!showMenu)} style={{fontSize:'4rem'}}/>
                { showMenu &&<div className="navbar_menu_items">
                    <h1 onClick={()=>navigate('/')}>Home</h1>
                    <h1 onClick={()=>navigate('/cart')}>Cart</h1>
                    <h1>Contact</h1>
                    <h1 className='no_border'>Categories <KeyboardArrowDownIcon style={{fontSize:'3rem'}}/> </h1>
                    <div className="navbar_menu_categories">
                    {categories && categories.map((category, index)=><Link key={index} to={`products/category/${category}`}><li to={'#'} key={index}>{category.toUpperCase()}</li></Link>)}
                    </div>
                    </div>}
                </div>
            </div>
           
        </div>
    )
}

export default Navbar