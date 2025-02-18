import React from 'react'
import Parent from '../Parent/Parent'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

import style from './Layout.module.css'

const Layout = () => {
  return (
    <div className={style.layOutElem}>
    <Parent />
    <Outlet />
    <Footer />
    </div>
  )
}

export default Layout