import React from 'react'
import { useParams } from 'react-router-dom'

import style from './Product.module.css'

const Product = (props) => {
  const {id} = useParams()

  let product = props.prods.find((el) => el.id === +id)
  
  
    return (
        <div className={style.element}>
        <h2>{product.title}</h2>
        <img src={product.image} width={300} />
        <p>{product.description}</p>
        <p>Price:{product.price}$</p>
        <button className={style.butt}>Buy</button>        
        </div>
  )
}

export default Product