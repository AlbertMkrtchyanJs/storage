
import { Routes,Route } from 'react-router-dom'

import Main from './pages/Main/Main'
import Layout from './components/Layout/Layout'
import Product from './pages/Product/Product'

import style from './App.module.css'
import { useEffect, useState } from 'react'

function App() {
 const [data,setData] = useState([])

 useEffect(()=>{
  fetch('https://fakestoreapi.com/products')
  .then((res)=> res.json())
  .then((res)=> setData(res))
 },[])

  return (
    <div className={style.item}>   
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Main prods={data}/>}/>
      <Route path='/prod/:id' element={<Product prods={data}/>}/>
      </Route>
    </Routes>
    </div>
  )
}

export default App
