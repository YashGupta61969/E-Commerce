import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './navbar.css'
import { useSelector } from 'react-redux'

function Navbar() {
    const cart = useSelector(state=>state.cart.cart)
    const navigate = useNavigate()
    const [categories, setCategories] = useState([])
    const [showMenu, setShowMenu] = useState(false)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(resp => resp.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='navbar'>
            <div className="navbar_top">
                <div className="navbar_logo">
                    <h1 onClick={() => navigate('/')} >VENRY'S</h1>
                </div>
                <div className="navbar_links">
                    <Link to={'/'}><HomeIcon style={{ marginRight: '5px', fontSize: '2.2rem' }} />Home</Link>
                    <Link to={'/cart'}> <ShoppingCartIcon style={{ marginRight: '5px', fontSize: '2.2rem' }} /><span>{cart.length > 0 && cart.length}</span>Cart</Link>
                    <Link to={'/about'}> <InfoIcon style={{ marginRight: '5px', fontSize: '2.2rem' }} />About</Link>
                </div>
                <div className="navbar_menu">
                    <MenuIcon onClick={() => setShowMenu(!showMenu)} style={{ fontSize: '4rem' }} />
                    {showMenu && <div className="navbar_menu_items">
                        <h1 onClick={() => { navigate('/'); setShowMenu(false) }}>Home</h1>
                        <h1 onClick={() => { navigate('/cart'); setShowMenu(false) }}>Cart</h1>
                        <h1 onClick={() => { navigate('/contact'); setShowMenu(false) }}>Contact</h1>
                        <h1 className='no_border'>Categories <KeyboardArrowDownIcon style={{ fontSize: '3rem' }} /> </h1>
                        <div className="navbar_menu_categories">
                            {categories && categories.map((category, index) => <Link key={index} to={`products/category/${category}`} onClick={() => setShowMenu(false)}><li to={'#'} key={index}>{category.toUpperCase()}</li></Link>)}
                        </div>
                    </div>}
                </div>
            </div>

        </div>
    )
}

export default Navbar