import React, { useEffect, useState } from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import '../../components/cart.css'
import { useNavigate } from 'react-router-dom';
import CartProducts from '../../components/CartProducts';
import { useSelector } from 'react-redux'

function Cart() {
  const cart = useSelector(state=>state.cart.cart)
  const amount = useSelector(state=>state.cart.totalAmount)
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart_logo">
        <ShoppingBagIcon style={{ fontSize: '4rem', color: '#201E20' }} />
        <h1>My Cart</h1>
      </div>
      <div className="cart_main">
        {cart.length !== 0 ? <div className="cart_products">
          {cart && cart.map(product => (
            <CartProducts key={product.id} product={product} />
          ))}
        </div> : <div className="cart_noproducts">
          <div className="cart_err_head">
            <h1>Error 404</h1>
          </div>
          <div className="cart_err_desc">
            <p>OOPS! No products are found in your cart.</p>
            <p>Go to Home page and add some products to your cart</p>
            <button onClick={() => navigate('/')}>Go To Home</button>
          </div>
        </div>}


        {cart.length !== 0 && <div className="cart_checkout">
          <div className="checkout_top_head">
            <strong>Total</strong>
          </div>
          <div className="checkout_sub_total">
            <div className="checkout_total_left">
              <strong>SubTotal:</strong>
            </div>
            <div className="checkout_total_right">
              <p>$ {amount}</p>
            </div>
          </div>
          <button>Checkout</button>
        </div>}
      </div>
    </div>
  )
}

export default Cart
