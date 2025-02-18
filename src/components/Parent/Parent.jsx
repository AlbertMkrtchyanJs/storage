import React from 'react'
import { NavLink } from 'react-router-dom'

import style from './Parent.module.css'

const Parent = () => {
  return (
    <div className={style.home}>
        <NavLink to='/'>Home</NavLink>
    </div>
  )
}

export default Parent