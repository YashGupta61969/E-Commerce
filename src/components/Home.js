import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './home.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector, useDispatch } from 'react-redux'
import {addToCart, removeFromCart} from '../features/cart/cartSlice'

function Home() {
  const dispatch = useDispatch();
  const cartProducts = useSelector(state => state.cart.cart)
  const navigate = useNavigate();
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(resp =>resp.json())
    .then(data=>setProducts(data));

    fetch('https://fakestoreapi.com/products/categories')
    .then(resp =>resp.json())
    .then(data=>setCategories(data))
  },[]);
  
const addToCartList = (e, product)=>{
  e.preventDefault();
  e.stopPropagation()
  dispatch(addToCart(product))
}

const removeFromCartList = (e, product)=>{
  e.preventDefault();
  e.stopPropagation()
  dispatch(removeFromCart(product))
}

  return (
    <div className='home'>
      <div className="home_banner">
        <img src={require('./shop.png')} alt="" />
        <div className="banner_text">
          <h1 className='banner_top_text'>The Easy Way To</h1>
          <h1 className='banner_bottom_text'>Shop Online</h1>
          <p>Venry is a dummy online shopping application created only for development purposes. This application is build using React.js and fake store api.</p>
          <button>Shop Now</button>
        </div>
      </div>
      <div className="navbar_bottom">
                {categories && categories.map((category, index)=><Link key={index} to={`products/category/${category}`}><h1 to={'#'} key={index}>{category.toUpperCase()}</h1></Link>)}
            </div>
      <div className="home_shop">
        {products && products.map(product=>(
          <div onClick={()=>navigate(`/product/${product.id}`)} key={product.id} className='product_card'>
            <div className="product_card_img">
              <img src={product.image} alt="" />
              <strong>$ {product.price}</strong>
            </div>
            <div className="product_card_description">
              <h1>{product.title}</h1>
              <h1> Rating: {product.rating.rate}/5</h1>

              {cartProducts.some(item=>item.id === product.id) ? 
              <button onClick={e=>removeFromCartList(e,product.id)}> <ShoppingCartIcon style={{marginRight:'5px', fontSize:'1.8rem'}}/> Remove From Cart</button> :
              <button onClick={e=>addToCartList(e,product)}> <ShoppingCartIcon style={{marginRight:'5px', fontSize:'1.8rem'}}/> Add To Cart</button> }

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
