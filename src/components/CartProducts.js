import React, {  useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {removeFromCart,addAmount} from '../features/cart/cartSlice'

function CartProducts({ product }) {
    const dispatch = useDispatch();
    const [counter, setCounter] = useState(1)
    const [total, setTotal] = useState(product.price)
    const navigate = useNavigate();
    
    useEffect(()=>{
        dispatch(addAmount(total))
    },[counter])


    const removeFromCartList = (e, product)=>{
        e.preventDefault();
        e.stopPropagation()
        dispatch(removeFromCart(product))
    }

      
    return (
        <div key={product.id} className="cart_product">
            <div className="cart_product_img">
                <img src={product.image} alt="" />
            </div>
            <div className="cart_product_info">
                <h1>{product.title}</h1>
                <strong style={{marginTop:'1rem'}}>Price: ${product.price}</strong>
                <strong className='cart_product_total'>Rating: {product.rating.rate}</strong>
                <div className="cart_product_btns">
                    <button onClick={() => navigate(`/product/${product.id}`)}>Show Product Details</button>
                    <button className='cancel_button' onClick={e=>removeFromCartList(e,product.id)}>Remove from Cart</button>
                </div>
            </div>
        </div>
    )
}

export default CartProducts
