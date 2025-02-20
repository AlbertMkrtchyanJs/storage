import React from 'react'
import Parent from '../Parent/Parent'

import { Outlet } from 'react-router-dom'

import style from './Layout.module.css'

const Layout = () => {
  return (
    <div className={style.layOutElem}>
    <Parent />
    <Outlet />
    </div>
  )
}

export default Layout