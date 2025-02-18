
import { Routes,Route } from 'react-router-dom'

import Main from './pages/Main/Main'
import Layout from './components/Layout/Layout'
import Product from './pages/Product/Product'

import style from './App.module.css'

function App(props) {
 

  return (
    <div className={style.item}>   
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Main prods={props.data}/>}/>
      <Route path='/prod/:id' element={<Product prods={props.data}/>}/>
      </Route>
    </Routes>
    </div>
  )
}

export default App
