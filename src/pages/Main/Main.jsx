import React from 'react'
import { NavLink } from 'react-router-dom'

import style from './Main.module.css'

const Main = (props) => {
  return (
    <>
    {
        props.prods.map((el) =>{
            return(
                <div className={style.boxItem}>
                <p>{el.title}</p>
                <NavLink to={`/prod/${el.id}`}>
                <img width={100} src={el.image} />
                </NavLink>
                <p>{el.category}</p>
                <p>Price:{el.price}$</p>
                </div>
            )
        })
    }
    </>
  )
}

export default Main