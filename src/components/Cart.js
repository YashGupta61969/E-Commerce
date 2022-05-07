import React, { useEffect, useState } from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import './cart.css'

function Cart() {
  const [cartItems, setCartItems] = useState('')


  return (
    <div className='cart'>
        <div className="cart_logo">
          <ShoppingBagIcon style={{fontSize:'4rem', color:'#201E20'}}/>
          <h1>My Cart</h1>
        </div>
        <div className="cart_product">

        </div>
    </div>
  )
}

export default Cart
