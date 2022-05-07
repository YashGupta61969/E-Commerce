import React, { useState, useEffect } from 'react'
import './categoryPage.css'
import { useParams, Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function CategoryPage() {
    const {name} = useParams();
    const [products, setProducts] = useState('')
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/category/${name}`)
        .then(resp =>resp.json())
        .then(data=>setProducts(data));
      },[name]);
      console.log(products)
  return (
    <div className='category_page'>
      <h1>{name.toUpperCase()}</h1>
      <div className="home_shop">
      {products && products.map(product=>(
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
  )
}

export default CategoryPage
