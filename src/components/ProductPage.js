import React, { useState, useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './productPage.css'
import GlobalContext from '../Context';


function ProductPage() {
  const {cart, setCart} = useContext(GlobalContext);
    const {id} = useParams();
    const [product, setProduct] = useState('');
    const [category, setCategory] = useState('');

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(resp =>resp.json())
        .then(data=>setProduct(data));

      },[id]);

      useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/category/${product.category}`)
            .then(res=>res.json())
            .then(json=>setCategory(json))
      },[id,product])
      

      const addToCart = (e, id)=>{
        e.preventDefault()
        setCart([...cart, id])
      }
    return (
    <div className='product_page'>
      <div className="product_page_top">
      <div className="product_page_banner">
          <img src={product && product.image} alt="" />
      </div>
      <div className="product_page_right">
          <div className="product_page_description">
        <p>{product && product.category}</p>
        <h1 className='product_page_description_title'>{product && product.title}</h1>
        <h1 className='product_page_description_rating'>{`Rating: ${product && product.rating.rate}/5`} <span>{product && product.rating.count} Reviews</span></h1>
        <h1 className="product_page_description_price">$ {product && product.price}</h1>
        <h2>{product.description}</h2>
          </div>
          <button onClick={(e)=>addToCart(e,product.id)} disabled={cart.some(item=>item===product.id)}className='product_page_add'> <ShoppingCartIcon style={{marginRight:'5px', fontSize:'2.2rem'}}/>ADD TO CART</button>
      </div>
      </div>
      <div className="product_page_related">
          <h1>More like {product.category}</h1>
        <div className="home_shop">
        {category && category.map(product=>(
          <Link to={`/product/${product.id}`} key={product.id} className='product_card'>
            <div className="product_card_img">
              <img src={product.image} alt="" />
              <strong>$ {product.price}</strong>
            </div>
            <div className="product_card_description">
              <h1>{product.title}</h1>
              <h1> Rating: {product.rating.rate}/5</h1>
              <button> <ShoppingCartIcon style={{marginRight:'5px', fontSize:'1.8rem'}}/> Add To Cart</button>
            </div>
          </Link>
        ))}
        </div>
      </div>
    </div>
  )
}

export default ProductPage
