import React, { useEffect, useState, useContext } from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import GlobalContext from '../Context';
import './cart.css'
import { useNavigate } from 'react-router-dom';

function Cart() {
  const navigate= useNavigate();
  const {cart, setCart} = useContext(GlobalContext);
  const [products, setProducts] = useState([])
  const [counter, setCounter] = useState(1)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(()=>{
    const item = [...new Set(cart)]
    for(let i =0; i <= item.length; i++){
      fetch(`https://fakestoreapi.com/products/${item[i]}`)
      .then(resp =>resp.json())
      .then(data=>setProducts(p=>[...p, data]))
    }
  }, [])

  const handleChange = (e) =>{
      setCounter(e.target.value)
  }

  return (
    <div className='cart'>
        <div className="cart_logo">
          <ShoppingBagIcon style={{fontSize:'4rem', color:'#201E20'}}/>
          <h1>My Cart</h1>
        </div>
        <div className="cart_main">
            {products.length !== 0 ? <div className="cart_products">
              {products && products.map(product=>(
                <div key={product.id} className="cart_product">
                  <div className="cart_product_img">
                    <img src={product.image} alt="" />
                  </div>
                  <div className="cart_product_info">
                  <h1>{product.title}</h1>
                  <strong>Price: ${product.price}</strong>
                  <div className="cart_product_quantity">
                    <label htmlFor="number">Quantity</label>
                    <input type="number" id="number" onChange={(e)=>handleChange(e)} value={counter}/>
                  </div>
                    <strong className='cart_product_total'>Total Price: $ {product.price*counter}</strong>
                  <div className="cart_product_btns">
                    <button onClick={()=>navigate(`/product/${product.id}`)}>Show Product Details</button>
                    <button className='cancel_button' onClick={()=>{setProducts(prev=>{
                     return prev.filter(item => item.id !== product.id)
                    });
                    setCart(crt=>crt.filter(item=>item!==product.id))
                    }}>Remove from Cart</button>
                  </div>
                  </div>
                </div>
              ))}
            </div> : <div className="cart_noproducts">
                      <div className="cart_err_head">
                        <h1>Error 404</h1>
                      </div>
                      <div className="cart_err_desc">
                        <p>OOPS! No products are found in your cart.</p>
                        <p>Go to Home page and add some products to your cart</p>
                        <button  onClick={()=>navigate('/')}>Go To Home</button>
                      </div>
            </div> }


           {products.length !==0 && <div className="cart_checkout">
              <div className="checkout_top_head">
                <strong>Total</strong>
              </div>
              <div className="checkout_sub_total">
                <div className="checkout_total_left">
                  <strong>SubTotal:</strong>
                  <strong>Discount:</strong>
                  <strong className='m-top'>Total:</strong>
                </div>
                <div className="checkout_total_right">
                    <p>$ {totalPrice}</p>
                    <p>$ 0</p>
                    <p className='m-top'>$ {totalPrice}</p>
                </div>
              </div>
                <button>Checkout</button>
            </div>}
        </div>
    </div>
  )
}

export default Cart
